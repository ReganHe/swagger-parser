import {api} from './base'
import {Wo} from './modal'

const s = 'ApiWo.'

//#region add1--base auto
export namespace add1 { export type O = Wo.add1.O; export type R = Wo.add1.R }
/**
 * 新增维修报告
 *
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/add；
 */
export const add1 = api<add1.O, add1.R>(s + 'add1', {path: '/1.0/wo/add', method: 'POST', body: 'contents&conclusion&conclusionContent&detailedList&nature&repairApplicant&stationId&contacts&phone&repairDate&checkId&checkType&fileList'})
//#endregion add1--base
//#region add1--mock auto
if (__DEV__) {
  add1.mock('自动生成', () => {
    return {}
  })
}
//#endregion add1--mock


//#region getPaged1--base auto
export namespace getPaged1 { export type O = Wo.getPaged1.O; export type R = Wo.getPaged1.R }
/**
 * 分页查询维修报告
 *
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/get_paged；
 */
export const getPaged1 = api<getPaged1.O, getPaged1.R>(s + 'getPaged1', {path: '/1.0/wo/get_paged', query: 'stationId&orderNo&status&nature&beginDate&endDate&pageNum&pageSize'})
//#endregion getPaged1--base
//#region getPaged1--mock auto
if (__DEV__) {
  getPaged1.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged1--mock


//#region getOne1--base auto
export namespace getOne1 { export type O = Wo.getOne1.O; export type R = Wo.getOne1.R }
/**
 * 主键查询维修报告详情
 *
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/get_one；
 */
export const getOne1 = api<getOne1.O, getOne1.R>(s + 'getOne1', {path: '/1.0/wo/get_one', query: 'id'})
//#endregion getOne1--base
//#region getOne1--mock auto
if (__DEV__) {
  getOne1.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne1--mock


//#region edit1--base auto
export namespace edit1 { export type O = Wo.edit1.O; export type R = Wo.edit1.R }
/**
 * 编辑维修报告
 *
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/edit；
 */
export const edit1 = api<edit1.O, edit1.R>(s + 'edit1', {path: '/1.0/wo/edit', method: 'PUT', body: 'id&conclusion&conclusionContent&detailedList&status&confirmedBy&rejectReason&fileList'})
//#endregion edit1--base
//#region edit1--mock auto
if (__DEV__) {
  edit1.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit1--mock


//#region remove--base auto
export namespace remove { export type O = Wo.remove.O; export type R = Wo.remove.R }
/**
 * 删除维修报告
 *
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/remove/{id}；
 */
export const remove = api<remove.O, remove.R>(s + 'remove', {path: '/1.0/wo/remove/:id', method: 'DELETE'})
//#endregion remove--base
//#region remove--mock auto
if (__DEV__) {
  remove.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove--mock

