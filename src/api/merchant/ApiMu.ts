import {api} from './base'
import {Mu} from './modal'

const s = 'ApiMu.'

//#region getByCondition--base auto
export namespace getByCondition { export type O = Mu.getByCondition.O; export type R = Mu.getByCondition.R }
/**
 * 条件查询厂家/单位
 *
 *
 * **TAG:** 厂家/单位服务； &nbsp;&nbsp; **PATH:** /1.0/mu/get_condition；
 */
export const getByCondition = api<getByCondition.O, getByCondition.R>(s + 'getByCondition', {path: '/1.0/mu/get_condition', query: 'name&type'})
//#endregion getByCondition--base
//#region getByCondition--mock auto
if (__DEV__) {
  getByCondition.mock('自动生成', () => {
    return {}
  })
}
//#endregion getByCondition--mock

