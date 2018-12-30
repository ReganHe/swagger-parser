import {range, permutation} from 'mora-common/util/math'
import {capCamelCase} from 'mora-common/util/string'

export type Omit<O, K> = Pick<O, Exclude<keyof O, K>>

export function eachObject<T>(obj: {[key: string]: T}, fn: (key: string, value: T) => void) {
  Object.entries(obj).forEach(([key, value]) => {
    fn(key, value)
  })
}

/** tag name 是否是纯英文（不能出现中文在 tag name 上） */
export function isValidTagName(name: string) {
  return /^[.\w-]*$/.test(name)
}

export function smartGetUniqueTagNameFromPaths(tags: Array<{name: string, paths: string[]}>, takenTags: string[]) {
  let res: {[key: string]: string} = {}

  let uniques: Array<{name: string, availableNames: string[]}> = []
  tags.forEach(({name, paths}) => {
    if (!paths.length) return
    //// 取出 paths 中相同的部分

    // 先拆分成一段段
    const pathParts = paths.map(p => p.split('/').filter(v => v.trim()))

    // 最小长度的 part
    const minLength = pathParts.reduce((min, parts) => {
      if (parts.length < min) return parts.length
      return min
    }, 5)

    // 得到相同的部分
    const example = pathParts[0]
    const sameParts = range(minLength).filter(i => pathParts.every(part => part[i] === example[i])).map(i => example[i])

    // v1 这种部分的优先级应该靠后
    let weight = (arr: string[]) => arr.length * 1000 + (minLength - 1 + arr.findIndex(a => /^v\d+$/i.test(a)) * 10)
    // 将相同的部分做排列，所有排列都是有可能的名称（名字当然是越短越好，所以将短的放前面）
    let availableNames = permutation(sameParts).sort((a, b) => weight(a) - weight(b)).map(part => capCamelCase(part.join(' ')))
    uniques.push({name, availableNames})
  })

  uniques.forEach((it, i) => {
    let others = [...uniques.slice(0, i), ...uniques.slice(i + 1)]
    let newName = it.availableNames.find(n => !takenTags.includes(n) && others.every(o => !o.availableNames.includes(n)))
    if (newName) res[it.name] = newName
  })

  return res
}
