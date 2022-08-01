import {api} from './base'
import {Mrp} from './modal'

const s = 'ApiMrp.'

//#region add7--base auto
export namespace add7 { export type O = Mrp.add7.O; export type R = Mrp.add7.R }
/**
 * 新增中修计划
 *
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/add；
 */
export const add7 = api<add7.O, add7.R>(s + 'add7', {path: '/1.0/mrp/add', method: 'POST', body: 'stationId&contents&nature&planStartDate&planEndDate&repairDate&cycle&daysAhead&remark&timeList'})
//#endregion add7--base
//#region add7--mock auto
if (__DEV__) {
  add7.mock('自动生成', () => {
    return {}
  })
}
//#endregion add7--mock


//#region getPaged8--base auto
export namespace getPaged8 { export type O = Mrp.getPaged8.O; export type R = Mrp.getPaged8.R }
/**
 * 分页查询中修计划
 *
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/get_paged；
 */
export const getPaged8 = api<getPaged8.O, getPaged8.R>(s + 'getPaged8', {path: '/1.0/mrp/get_paged', query: 'stationId&status&nextRepairStartDate&nextRepairEndDate&pageNum&pageSize'})
//#endregion getPaged8--base
//#region getPaged8--mock auto
if (__DEV__) {
  getPaged8.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged8--mock


//#region getOne7--base auto
export namespace getOne7 { export type O = Mrp.getOne7.O; export type R = Mrp.getOne7.R }
/**
 * 主键查询中修计划详情
 *
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/get_one；
 */
export const getOne7 = api<getOne7.O, getOne7.R>(s + 'getOne7', {path: '/1.0/mrp/get_one', query: 'id'})
//#endregion getOne7--base
//#region getOne7--mock auto
if (__DEV__) {
  getOne7.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne7--mock


//#region stop--base auto
export namespace stop { export type O = Mrp.stop.O; export type R = Mrp.stop.R }
/**
 * 终止中修计划
 *
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/stop；
 */
export const stop = api<stop.O, stop.R>(s + 'stop', {path: '/1.0/mrp/stop', method: 'PUT', body: 'id'})
//#endregion stop--base
//#region stop--mock auto
if (__DEV__) {
  stop.mock('自动生成', () => {
    return {}
  })
}
//#endregion stop--mock


//#region edit7--base auto
export namespace edit7 { export type O = Mrp.edit7.O; export type R = Mrp.edit7.R }
/**
 * 编辑中修计划
 *
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/edit；
 */
export const edit7 = api<edit7.O, edit7.R>(s + 'edit7', {path: '/1.0/mrp/edit', method: 'PUT', body: 'id&daysAhead&remark&timeList'})
//#endregion edit7--base
//#region edit7--mock auto
if (__DEV__) {
  edit7.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit7--mock

