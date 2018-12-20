import {Type, ObjectType} from './Type'

export namespace Operation {
  export interface OperationObject {
    /** swagger 文档中的 operationId */
    rawId: string
    /** 描述 */
    desc?: string
    /** http method，大写字母 */
    method: string
    /** 如果 path 中有参数，会使用 {} 包裹 */
    path: string
    /** 参数，分不同的地方，可以存在 query/header/path/formData/cookie/body 中 */
    parameters: ParameterObject[]
    /** 返回的类型 */
    returns: Type
  }

  export type IN = 'query' | 'header' | 'path' | 'formData' | 'cookie' | 'body'

  export interface BodyParameterObject {
    in: 'body'
    type: Type
  }

  export interface RestParameterObject {
    in: Exclude<IN, 'body'>
    type: ObjectType
  }

  export type ParameterObject = BodyParameterObject | RestParameterObject
}

export class Operation {
  constructor(public opt: Operation.OperationObject) {

  }

  toTS(namespaces: string[]) {
    let {parameters} = this.opt
    if (parameters.length) {
      parameters.forEach(p => {
        if (p.in === 'body') {
          if (Type.isObjectType(p.type)) {

          } else if (Type.isArrayType(p.type)) {

          } else {

          }
        } else {
          // 其它情况肯定是 ObjectType
        }
      })
    }

  }

  /** 忽略指定位置的参数 */
  omitParameter(location: Operation.IN, targetPath: string) {}

  /** 忽略 response 中的某个字段 */
  omitResponse(targetPath: string) {}
  /** 选择 response 中的某个字段来作为新的 response */
  pickResponse(targetPath: string) {}
  /** 将旧的 response 对象放入一个新的 response（对象） 中 */
  wrapResponse(wrapContainer: any) {}
}
