import {api} from './base'
import {Device} from './modal'

const s = 'ApiDevice.'

//#region add5--base auto
export namespace add5 { export type O = Device.add5.O; export type R = Device.add5.R }
/**
 * 新增常规设备
 *
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/add；
 */
export const add5 = api<add5.O, add5.R>(s + 'add5', {path: '/1.0/device/add', method: 'POST', body: 'name&stationId&specification&manufacturer&usingDate&unitMeasure&actualQuantity&installationPosition&remark'})
//#endregion add5--base
//#region add5--mock auto
if (__DEV__) {
  add5.mock('自动生成', () => {
    return {}
  })
}
//#endregion add5--mock


//#region getPaged5--base auto
export namespace getPaged5 { export type O = Device.getPaged5.O; export type R = Device.getPaged5.R }
/**
 * 分页查询设备列表
 *
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/get_paged；
 */
export const getPaged5 = api<getPaged5.O, getPaged5.R>(s + 'getPaged5', {path: '/1.0/device/get_paged', query: 'stationId&name&manufacturer&pageNum&pageSize'})
//#endregion getPaged5--base
//#region getPaged5--mock auto
if (__DEV__) {
  getPaged5.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged5--mock


//#region getOne4--base auto
export namespace getOne4 { export type O = Device.getOne4.O; export type R = Device.getOne4.R }
/**
 * 主键查询常规设备详情
 *
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/get_one；
 */
export const getOne4 = api<getOne4.O, getOne4.R>(s + 'getOne4', {path: '/1.0/device/get_one', query: 'id'})
//#endregion getOne4--base
//#region getOne4--mock auto
if (__DEV__) {
  getOne4.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne4--mock


//#region edit5--base auto
export namespace edit5 { export type O = Device.edit5.O; export type R = Device.edit5.R }
/**
 * 编辑常规设备
 *
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/edit；
 */
export const edit5 = api<edit5.O, edit5.R>(s + 'edit5', {path: '/1.0/device/edit', method: 'PUT', body: 'id&name&stationId&specification&manufacturer&usingDate&unitMeasure&actualQuantity&installationPosition&remark'})
//#endregion edit5--base
//#region edit5--mock auto
if (__DEV__) {
  edit5.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit5--mock


//#region remove2--base auto
export namespace remove2 { export type O = Device.remove2.O; export type R = Device.remove2.R }
/**
 * 删除常规设备
 *
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/remove/{id}；
 */
export const remove2 = api<remove2.O, remove2.R>(s + 'remove2', {path: '/1.0/device/remove/:id', method: 'DELETE'})
//#endregion remove2--base
//#region remove2--mock auto
if (__DEV__) {
  remove2.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove2--mock

