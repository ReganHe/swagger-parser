import * as fs from 'fs-extra'
import { series } from 'mora-common/util/async'
import { capCamelCase } from 'mora-common/util/string'
import { info, clog } from 'mora-scripts/libs/sys'

import * as path from 'path'
import { FORMAT } from '../config'
import { parser3 } from '../parser3'
import { swagger3 } from '../schema/swagger3'
import { Operation } from '../struct/Operation'
import { eachObject } from '../util'
import { getConfig, lookupRootDir, getSwaggerJson, writeFile, parseApiFile, getFile, groupApi2File } from './helper'

const { TAB, EOL } = FORMAT

export async function generate(cliOpts: { name?: string[], force?: boolean, mock?: boolean, base?: boolean } = {}) {
  const root = lookupRootDir(__dirname)
  const configs = getConfig()

  const onlyUpdateMock = cliOpts.mock && !cliOpts.base
  const userConfigs = (cliOpts.name || []).map(c => {
    let [name, tagName, apiName] = c.split('.')
    return { name, tagName, apiName }
  })

  const matchUserConfigs = (name: string, tagName: string, apiName: string) => {
    return !userConfigs.length ? true : userConfigs.find(obj => obj.name === name && (!obj.tagName || obj.tagName === tagName) && (!obj.apiName || obj.apiName === apiName))
  }

  await series(configs, async (c, configIndex) => {
    let userConfig: typeof userConfigs[0] | undefined
    if (userConfigs.length) {
      userConfig = userConfigs.find(u => u.name === c.name)
      if (!userConfig) return
    } else if (c.disabled) {
      return
    }

    info(`解析 ${c.name} 项目 ${c.showUpdateLog && userConfig ? JSON.stringify(userConfig) : ''} ...${JSON.stringify(c)}`)

    const json = await getSwaggerJson<swagger3.OpenAPIObject>(c)
    if (!/^3\./.test(json.openapi)) throw new Error(`不支持 swagger 版本：${json.openapi}`)

    const { type = 'fe', language = 'ts' } = c
    const tags = parser3(json, c)

    const tpl = (...name: string[]) => path.join(root, 'template', ...name)
    const out = (...name: string[]) => path.resolve(c.outputDir, ...name)
    const data = { ...getRenderData(json, tags), type, name: c.name }

    renderWhenNotExist(tpl('base'), out('base'), data, language)

    let modal: string[] = [
      '// tslint:disable', // 禁用 tslint
      '/* eslint-disable */', //禁用 eslint
      ''
    ]
    eachObject(tags, (tagName, tagObj) => {
      modal.push(`export namespace ${tagName} {`)

      // 使用用户指定的名称
      let fileName = capCamelCase('Api ' + tagName)
      if (c.fileNameMap) {
        let tempFileName = c.fileNameMap(fileName)
        if (!tempFileName) {
          return
        }

        if (tempFileName && typeof tempFileName === 'string') {
          fileName = tempFileName
        }

      }

      let fullFileName = out(fileName + '.' + language)
      // 如果存在旧文件，则解析旧文件结构
      const { api, dp } = parseApiFile(getFile(fullFileName))

      eachObject(tagObj, (apiName, operation) => {
        if (c.showGenerateLog) {
          console.log(`  generate ${tagName}.${apiName} ${operation.opt.path}`)
        }

        modal.push(`${TAB}export namespace ${apiName} {`)
        modal.push(prefix(operation.toModal(), TAB.repeat(2)))

        let ref = api[apiName]
        if (matchUserConfigs(c.name, tagName, apiName)) {
          if (!onlyUpdateMock && (!ref || !ref.base || ref.base.action === 'auto' || cliOpts.force)) {
            if (c.showUpdateLog) {
              updateLog('Update Base', `${c.name}.${tagName}.${apiName}`)
            }

            dp.set(
              `${apiName}.base`,
              {
                action: 'auto', code: operation.toBase({ ...data, docPrefix: c.docPrefix, language })
              })
          }
        }
        dp.set(`${apiName}.exists`, true) // 标识这个 api 存在，否则会被移除

        modal.push(`${TAB}}`)
      })

      if (matchUserConfigs(c.name, tagName, '')) {
        // 生成文件
        let s = `import * as base from './base'${EOL}import {${tagName}} from './modal'${EOL}${EOL}const s = '${fileName}.'${EOL}${EOL}`
        writeFile(fullFileName, s + groupApi2File(api))
      }

      modal.push(`}`)
    })

    // 生成 modal
    writeFile(out(`modal.ts`), modal.join(EOL) + EOL)
  })
}

function eachTags(tags: parser3.Returns.TagsObject, fn: (tagName: string, apiName: string, operation: Operation) => void) {
  eachObject(tags, (tagName, tagObj) => {
    eachObject(tagObj, (apiName, operation) => fn(tagName, apiName, operation))
  })
}

function getRenderData(json: swagger3.OpenAPIObject, tags: parser3.Returns.TagsObject) {
  let basePath = json.basePath || ''
  let baseMethod = 'POST'

  let maxCount = -1
  let methodCount: { [key: string]: number } = {}
  eachTags(tags, (tagName, apiName, operation) => {
    let method = operation.opt.method
    if (!methodCount[method]) {
      methodCount[method] = 1
    } else {
      methodCount[method]++
    }
  })

  eachObject(methodCount, (method, count) => {
    if (count > maxCount) {
      baseMethod = method
      maxCount = count
    }
  })

  return { basePath, baseMethod }
}

function renderWhenNotExist(fromFile: string, toFile: string, data: any, language = 'ts') {

  let run = (_fromFile: string, _toFile: string) => {
    // 如果文件存在，则不覆盖
    if (fs.existsSync(_toFile)) return

    let content = fs.readFileSync(_fromFile, 'utf-8')
    content = content.replace(/\${(\w+)}/g, (r, key) => {
      if (data.hasOwnProperty(key)) {
        return data[key]
      } else {
        return r
      }
    })
    writeFile(_toFile, content)
  }

  if (language === 'ts') {
    run(fromFile + '.ts.dtpl', toFile + '.ts')
  } else {
    throw new Error(`不支持生成语言： "${language}"`)
  }
}

function prefix(content: string, prefixStr: string) {
  return content.split(/\r?\n/).map(l => {
    let s = l.trimRight()
    if (s) {
      return prefixStr + s
    } else {
      return ''
    }
  }).join(EOL)
}

function updateLog(action: string, id: string) {
  clog(`  %c${action} %c${id}`, 'white', 'magenta')
}
