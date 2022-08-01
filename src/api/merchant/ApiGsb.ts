import {api} from './base'
import {Gsb} from './modal'

const s = 'ApiGsb.'

//#region add8--base auto
export namespace add8 { export type O = Gsb.add8.O; export type R = Gsb.add8.R }
/**
 * 新增常规物资台帐
 *
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/add；
 */
export const add8 = api<add8.O, add8.R>(s + 'add8', {path: '/1.0/gsb/add', method: 'POST', body: 'name&receiver&stationId&receiveDate&quantity&quantityUnit&remark'})
//#endregion add8--base
//#region add8--mock auto
if (__DEV__) {
  add8.mock('自动生成', () => {
    return {}
  })
}
//#endregion add8--mock


//#region getPaged9--base auto
export namespace getPaged9 { export type O = Gsb.getPaged9.O; export type R = Gsb.getPaged9.R }
/**
 * 分页查询常规物资台帐
 *
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/get_paged；
 */
export const getPaged9 = api<getPaged9.O, getPaged9.R>(s + 'getPaged9', {path: '/1.0/gsb/get_paged', query: 'stationId&name&beginDate&endDate&pageNum&pageSize'})
//#endregion getPaged9--base
//#region getPaged9--mock auto
if (__DEV__) {
  getPaged9.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged9--mock


//#region remove5--base auto
export namespace remove5 { export type O = Gsb.remove5.O; export type R = Gsb.remove5.R }
/**
 * 删除常规物资台帐
 *
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/remove/{id}；
 */
export const remove5 = api<remove5.O, remove5.R>(s + 'remove5', {path: '/1.0/gsb/remove/:id', method: 'DELETE'})
//#endregion remove5--base
//#region remove5--mock auto
if (__DEV__) {
  remove5.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove5--mock

