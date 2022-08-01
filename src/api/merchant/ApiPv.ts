import {api} from './base'
import {Pv} from './modal'

const s = 'ApiPv.'

//#region add--base auto
export namespace add { export type O = Pv.add.O; export type R = Pv.add.R }
/**
 * 新增压力容器
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/add；
 */
export const add = api<add.O, add.R>(s + 'add', {path: '/1.0/pv/add', method: 'POST', body: 'name&shortName&code&type&licenseNo&regCode&manufacturer&designPressure&inspectionCycle&operationDate&thisTimeCheckDate&nextAnnualInspectionDate&nextCompleteInspectionDate&installationPosition&stationId&inspectionUnit&maintenanceUnit'})
//#endregion add--base
//#region add--mock auto
if (__DEV__) {
  add.mock('自动生成', () => {
    return {}
  })
}
//#endregion add--mock


//#region getPaged--base auto
export namespace getPaged { export type O = Pv.getPaged.O; export type R = Pv.getPaged.R }
/**
 * 分页查询设备列表
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_paged；
 */
export const getPaged = api<getPaged.O, getPaged.R>(s + 'getPaged', {path: '/1.0/pv/get_paged', query: 'stationId&name&manufacturer&pageNum&pageSize'})
//#endregion getPaged--base
//#region getPaged--mock auto
if (__DEV__) {
  getPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged--mock


//#region getByStation--base auto
export namespace getByStation { export type O = Pv.getByStation.O; export type R = Pv.getByStation.R }
/**
 * 查询站点或登陆用户站点下的压力容器
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_by_station；
 */
export const getByStation = api<getByStation.O, getByStation.R>(s + 'getByStation', {path: '/1.0/pv/get_by_station', query: 'stationId'})
//#endregion getByStation--base
//#region getByStation--mock auto
if (__DEV__) {
  getByStation.mock('自动生成', () => {
    return {}
  })
}
//#endregion getByStation--mock


//#region getOne--base auto
export namespace getOne { export type O = Pv.getOne.O; export type R = Pv.getOne.R }
/**
 * 主键查询常规设备详情
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_one；
 */
export const getOne = api<getOne.O, getOne.R>(s + 'getOne', {path: '/1.0/pv/get_one', query: 'id'})
//#endregion getOne--base
//#region getOne--mock auto
if (__DEV__) {
  getOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne--mock


//#region discard--base auto
export namespace discard { export type O = Pv.discard.O; export type R = Pv.discard.R }
/**
 * 废弃压力容器
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/discard；
 */
export const discard = api<discard.O, discard.R>(s + 'discard', {path: '/1.0/pv/discard', method: 'PUT', body: 'id'})
//#endregion discard--base
//#region discard--mock auto
if (__DEV__) {
  discard.mock('自动生成', () => {
    return {}
  })
}
//#endregion discard--mock


//#region edit--base auto
export namespace edit { export type O = Pv.edit.O; export type R = Pv.edit.R }
/**
 * 编辑压力容器
 *
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/edit；
 */
export const edit = api<edit.O, edit.R>(s + 'edit', {path: '/1.0/pv/edit', method: 'PUT', body: 'id&name&shortName&code&licenseNo&regCode&manufacturer&designPressure&inspectionCycle&operationDate&thisTimeCheckDate&nextAnnualInspectionDate&nextCompleteInspectionDate&installationPosition&stationId&inspectionUnit&maintenanceUnit&type'})
//#endregion edit--base
//#region edit--mock auto
if (__DEV__) {
  edit.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit--mock

