import {api} from './base'
import {GwsDevice} from './modal'

const s = 'ApiGwsDevice.'

//#region addDevice--base auto
export namespace addDevice { export type O = GwsDevice.addDevice.O; export type R = GwsDevice.addDevice.R }
/**
 * 新增设备
 *
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/add；
 */
export const addDevice = api<addDevice.O, addDevice.R>(s + 'addDevice', {path: '/mgr/device/add', method: 'POST', body: 'name&stationId&specification&manufacturer&usingDate&unitMeasure&actualQuantity&installationPosition&remark'})
//#endregion addDevice--base
//#region addDevice--mock auto
if (__DEV__) {
  addDevice.mock('自动生成', () => {
    return {}
  })
}
//#endregion addDevice--mock


//#region findAllDevices--base auto
export namespace findAllDevices { export type O = GwsDevice.findAllDevices.O; export type R = GwsDevice.findAllDevices.R }
/**
 * 获取所有设备列表
 *
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/get_list；
 */
export const findAllDevices = api<findAllDevices.O, findAllDevices.R>(s + 'findAllDevices', {path: '/mgr/device/get_list', query: 'status'})
//#endregion findAllDevices--base
//#region findAllDevices--mock auto
if (__DEV__) {
  findAllDevices.mock('自动生成', () => {
    return {}
  })
}
//#endregion findAllDevices--mock


//#region findOneDevice--base auto
export namespace findOneDevice { export type O = GwsDevice.findOneDevice.O; export type R = GwsDevice.findOneDevice.R }
/**
 * 获取单个设备信息
 *
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/get_one/{id}；
 */
export const findOneDevice = api<findOneDevice.O, findOneDevice.R>(s + 'findOneDevice', {path: '/mgr/device/get_one/:id'})
//#endregion findOneDevice--base
//#region findOneDevice--mock auto
if (__DEV__) {
  findOneDevice.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneDevice--mock


//#region modifyDevice--base auto
export namespace modifyDevice { export type O = GwsDevice.modifyDevice.O; export type R = GwsDevice.modifyDevice.R }
/**
 * 修改设备
 *
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/modify；
 */
export const modifyDevice = api<modifyDevice.O, modifyDevice.R>(s + 'modifyDevice', {path: '/mgr/device/modify', method: 'PUT', body: 'id&name&type&status'})
//#endregion modifyDevice--base
//#region modifyDevice--mock auto
if (__DEV__) {
  modifyDevice.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyDevice--mock


//#region removeDevice--base auto
export namespace removeDevice { export type O = GwsDevice.removeDevice.O; export type R = GwsDevice.removeDevice.R }
/**
 * 删除设备
 *
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/remove/{id}；
 */
export const removeDevice = api<removeDevice.O, removeDevice.R>(s + 'removeDevice', {path: '/mgr/device/remove/:id', method: 'DELETE'})
//#endregion removeDevice--base
//#region removeDevice--mock auto
if (__DEV__) {
  removeDevice.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeDevice--mock

