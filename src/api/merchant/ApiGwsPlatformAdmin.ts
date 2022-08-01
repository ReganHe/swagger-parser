import {api} from './base'
import {GwsPlatformAdmin} from './modal'

const s = 'ApiGwsPlatformAdmin.'

//#region addUser3--base auto
export namespace addUser3 { export type O = GwsPlatformAdmin.addUser3.O; export type R = GwsPlatformAdmin.addUser3.R }
/**
 * 新增平台管理员
 *
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/add；
 */
export const addUser3 = api<addUser3.O, addUser3.R>(s + 'addUser3', {path: '/mgr/platform_admin/add', method: 'POST', body: 'loginName&userName&password&status&roleIds&deviceIds'})
//#endregion addUser3--base
//#region addUser3--mock auto
if (__DEV__) {
  addUser3.mock('自动生成', () => {
    return {}
  })
}
//#endregion addUser3--mock


//#region findOneUser3--base auto
export namespace findOneUser3 { export type O = GwsPlatformAdmin.findOneUser3.O; export type R = GwsPlatformAdmin.findOneUser3.R }
/**
 * 获取单个平台管理员信息
 *
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/get_one/{id}；
 */
export const findOneUser3 = api<findOneUser3.O, findOneUser3.R>(s + 'findOneUser3', {path: '/mgr/platform_admin/get_one/:id'})
//#endregion findOneUser3--base
//#region findOneUser3--mock auto
if (__DEV__) {
  findOneUser3.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneUser3--mock


//#region findUsersPaged1--base auto
export namespace findUsersPaged1 { export type O = GwsPlatformAdmin.findUsersPaged1.O; export type R = GwsPlatformAdmin.findUsersPaged1.R }
/**
 * 分页获取平台管理员列表
 *
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/get_list_paged；
 */
export const findUsersPaged1 = api<findUsersPaged1.O, findUsersPaged1.R>(s + 'findUsersPaged1', {path: '/mgr/platform_admin/get_list_paged', query: 'loginName&userName&status&page_num&page_size'})
//#endregion findUsersPaged1--base
//#region findUsersPaged1--mock auto
if (__DEV__) {
  findUsersPaged1.mock('自动生成', () => {
    return {}
  })
}
//#endregion findUsersPaged1--mock


//#region modifyUser3--base auto
export namespace modifyUser3 { export type O = GwsPlatformAdmin.modifyUser3.O; export type R = GwsPlatformAdmin.modifyUser3.R }
/**
 * 修改平台管理员
 *
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/modify；
 */
export const modifyUser3 = api<modifyUser3.O, modifyUser3.R>(s + 'modifyUser3', {path: '/mgr/platform_admin/modify', method: 'PUT', body: 'id&loginName&userName&password&status&roleIds&deviceIds'})
//#endregion modifyUser3--base
//#region modifyUser3--mock auto
if (__DEV__) {
  modifyUser3.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyUser3--mock


//#region removeUser2--base auto
export namespace removeUser2 { export type O = GwsPlatformAdmin.removeUser2.O; export type R = GwsPlatformAdmin.removeUser2.R }
/**
 * 删除平台管理员
 *
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/remove/{id}；
 */
export const removeUser2 = api<removeUser2.O, removeUser2.R>(s + 'removeUser2', {path: '/mgr/platform_admin/remove/:id', method: 'DELETE'})
//#endregion removeUser2--base
//#region removeUser2--mock auto
if (__DEV__) {
  removeUser2.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeUser2--mock

