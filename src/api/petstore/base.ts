import {Application, RequestConfig} from '@hujiang/foe-api'
import {createApplication} from '../common'

export const app = createApplication({
  basePath: '/v2',
  method: 'POST',
})

export namespace api {
  /**
   * 非 PlainObject 的表单(如提交文件)无法使用 interface 来提交
   *
   * 这时可以使用 {__rawBody: any} 的形式提交任意数据
   *
   * @example
   * export const api<RawBody, {status: number}>({path: '/file/upload'})
   */
  export interface RawBody {__rawBody: any}

  /**
   * 由于 api 接口是由 swagger 生成的，而上面的返回值可能会包一些统一的结构可以在外部提供
   *
   * 在 api 中可以通过 middleware 过滤出来，types 则可以通过此来过滤出来（需要自己实现具体过滤方案）
   */
  export type FilterRequest<T> = T

  /**
   * 由于 api 接口是由 swagger 生成的，而上面的请求值可能会包一些统一的结构可以在外部提供
   *
   * 在 api 中可以通过 middleware 过滤出来，types 则可以通过此来过滤出来（需要自己实现具体过滤方案）
   */
  export type FilterResponse<T> = T

  /**
   * 可以自定义一些 mock 数据的格式
   */
  export type FilterMock<T> = T | {__status: number, __message?: string} & Partial<T>
}

export function api<R>(name: string, config?: RequestConfig.Define): Application.ApiReturnsWithoutData<R, api.FilterMock<R>>
export function api<D extends RequestConfig.Data, R>(name: string, config?: RequestConfig.Define): Application.ApiReturnsWithData<D, R, api.FilterMock<R>>
export function api(name: string, config: RequestConfig.Define = {}) {
  return app.api<any, any>(name, config)
}
