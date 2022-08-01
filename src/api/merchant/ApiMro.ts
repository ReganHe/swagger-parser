import {api} from './base'
import {Mro} from './modal'

const s = 'ApiMro.'

//#region add6--base auto
export namespace add6 { export type O = Mro.add6.O; export type R = Mro.add6.R }
/**
 * 新增中修工单
 *
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/add；
 */
export const add6 = api<add6.O, add6.R>(s + 'add6', {path: '/1.0/mro/add', method: 'POST', body: 'contents&conclusion&conclusionContent&detailedList&nature&stationId&contacts&phone&fileList'})
//#endregion add6--base
//#region add6--mock auto
if (__DEV__) {
  add6.mock('自动生成', () => {
    return {}
  })
}
//#endregion add6--mock


//#region getPaged7--base auto
export namespace getPaged7 { export type O = Mro.getPaged7.O; export type R = Mro.getPaged7.R }
/**
 * 分页查询中修工单
 *
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/get_paged；
 */
export const getPaged7 = api<getPaged7.O, getPaged7.R>(s + 'getPaged7', {path: '/1.0/mro/get_paged', query: 'stationId&orderNo&status&beginDate&endDate&pageNum&pageSize'})
//#endregion getPaged7--base
//#region getPaged7--mock auto
if (__DEV__) {
  getPaged7.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged7--mock


//#region getOne6--base auto
export namespace getOne6 { export type O = Mro.getOne6.O; export type R = Mro.getOne6.R }
/**
 * 主键查询中修工单详情
 *
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/get_one；
 */
export const getOne6 = api<getOne6.O, getOne6.R>(s + 'getOne6', {path: '/1.0/mro/get_one', query: 'id'})
//#endregion getOne6--base
//#region getOne6--mock auto
if (__DEV__) {
  getOne6.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne6--mock


//#region edit6--base auto
export namespace edit6 { export type O = Mro.edit6.O; export type R = Mro.edit6.R }
/**
 * 编辑中修工单
 *
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/edit；
 */
export const edit6 = api<edit6.O, edit6.R>(s + 'edit6', {path: '/1.0/mro/edit', method: 'PUT', body: 'id&contents&conclusion&conclusionContent&detailedList&nature&stationId&contacts&phone&repairDate&status&fileList'})
//#endregion edit6--base
//#region edit6--mock auto
if (__DEV__) {
  edit6.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit6--mock


//#region remove4--base auto
export namespace remove4 { export type O = Mro.remove4.O; export type R = Mro.remove4.R }
/**
 * 删除中修工单
 *
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/remove/{id}；
 */
export const remove4 = api<remove4.O, remove4.R>(s + 'remove4', {path: '/1.0/mro/remove/:id', method: 'DELETE'})
//#endregion remove4--base
//#region remove4--mock auto
if (__DEV__) {
  remove4.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove4--mock

