import {api} from './base'
import {GwsApi} from './modal'

const s = 'ApiGwsApi.'

//#region addApi--base auto
export namespace addApi { export type O = GwsApi.addApi.O; export type R = GwsApi.addApi.R }
/**
 * 新增数据接口
 *
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/add；
 */
export const addApi = api<addApi.O, addApi.R>(s + 'addApi', {path: '/mgr/api/add', method: 'POST', body: 'deviceId&name&url&description&status'})
//#endregion addApi--base
//#region addApi--mock auto
if (__DEV__) {
  addApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion addApi--mock


//#region findApisPaged--base auto
export namespace findApisPaged { export type O = GwsApi.findApisPaged.O; export type R = GwsApi.findApisPaged.R }
/**
 * 获取所有设备列表
 *
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/get_list_paged；
 */
export const findApisPaged = api<findApisPaged.O, findApisPaged.R>(s + 'findApisPaged', {path: '/mgr/api/get_list_paged', query: 'deviceId&name&status&page_num&page_size'})
//#endregion findApisPaged--base
//#region findApisPaged--mock auto
if (__DEV__) {
  findApisPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findApisPaged--mock


//#region findOneApi--base auto
export namespace findOneApi { export type O = GwsApi.findOneApi.O; export type R = GwsApi.findOneApi.R }
/**
 * 获取单个数据接口信息
 *
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/get_one/{id}；
 */
export const findOneApi = api<findOneApi.O, findOneApi.R>(s + 'findOneApi', {path: '/mgr/api/get_one/:id'})
//#endregion findOneApi--base
//#region findOneApi--mock auto
if (__DEV__) {
  findOneApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneApi--mock


//#region modifyApi--base auto
export namespace modifyApi { export type O = GwsApi.modifyApi.O; export type R = GwsApi.modifyApi.R }
/**
 * 修改数据接口
 *
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/modify；
 */
export const modifyApi = api<modifyApi.O, modifyApi.R>(s + 'modifyApi', {path: '/mgr/api/modify', method: 'PUT', body: 'id&deviceId&name&url&description&status'})
//#endregion modifyApi--base
//#region modifyApi--mock auto
if (__DEV__) {
  modifyApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyApi--mock


//#region removeApi--base auto
export namespace removeApi { export type O = GwsApi.removeApi.O; export type R = GwsApi.removeApi.R }
/**
 * 删除数据接口
 *
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/remove/{id}；
 */
export const removeApi = api<removeApi.O, removeApi.R>(s + 'removeApi', {path: '/mgr/api/remove/:id', method: 'DELETE'})
//#endregion removeApi--base
//#region removeApi--mock auto
if (__DEV__) {
  removeApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeApi--mock

