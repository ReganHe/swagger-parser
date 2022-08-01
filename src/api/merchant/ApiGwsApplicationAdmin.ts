import {api} from './base'
import {GwsApplicationAdmin} from './modal'

const s = 'ApiGwsApplicationAdmin.'

//#region addUser2--base auto
export namespace addUser2 { export type O = GwsApplicationAdmin.addUser2.O; export type R = GwsApplicationAdmin.addUser2.R }
/**
 * 新增应用管理员
 *
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/add；
 */
export const addUser2 = api<addUser2.O, addUser2.R>(s + 'addUser2', {path: '/mgr/application_admin/add', method: 'POST', body: 'loginName&userName&password&status&roleIds&deviceIds'})
//#endregion addUser2--base
//#region addUser2--mock auto
if (__DEV__) {
  addUser2.mock('自动生成', () => {
    return {}
  })
}
//#endregion addUser2--mock


//#region findOneUser2--base auto
export namespace findOneUser2 { export type O = GwsApplicationAdmin.findOneUser2.O; export type R = GwsApplicationAdmin.findOneUser2.R }
/**
 * 获取单个应用管理员信息
 *
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/get_one/{id}；
 */
export const findOneUser2 = api<findOneUser2.O, findOneUser2.R>(s + 'findOneUser2', {path: '/mgr/application_admin/get_one/:id'})
//#endregion findOneUser2--base
//#region findOneUser2--mock auto
if (__DEV__) {
  findOneUser2.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneUser2--mock


//#region findUsersPaged--base auto
export namespace findUsersPaged { export type O = GwsApplicationAdmin.findUsersPaged.O; export type R = GwsApplicationAdmin.findUsersPaged.R }
/**
 * 分页获取应用管理员列表
 *
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/get_list_paged；
 */
export const findUsersPaged = api<findUsersPaged.O, findUsersPaged.R>(s + 'findUsersPaged', {path: '/mgr/application_admin/get_list_paged', query: 'loginName&userName&status&page_num&page_size'})
//#endregion findUsersPaged--base
//#region findUsersPaged--mock auto
if (__DEV__) {
  findUsersPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findUsersPaged--mock


//#region modifyUser2--base auto
export namespace modifyUser2 { export type O = GwsApplicationAdmin.modifyUser2.O; export type R = GwsApplicationAdmin.modifyUser2.R }
/**
 * 修改应用管理员
 *
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/modify；
 */
export const modifyUser2 = api<modifyUser2.O, modifyUser2.R>(s + 'modifyUser2', {path: '/mgr/application_admin/modify', method: 'PUT', body: 'id&loginName&userName&password&status&roleIds&deviceIds'})
//#endregion modifyUser2--base
//#region modifyUser2--mock auto
if (__DEV__) {
  modifyUser2.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyUser2--mock


//#region removeUser1--base auto
export namespace removeUser1 { export type O = GwsApplicationAdmin.removeUser1.O; export type R = GwsApplicationAdmin.removeUser1.R }
/**
 * 删除应用管理员
 *
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/remove/{id}；
 */
export const removeUser1 = api<removeUser1.O, removeUser1.R>(s + 'removeUser1', {path: '/mgr/application_admin/remove/:id', method: 'DELETE'})
//#endregion removeUser1--base
//#region removeUser1--mock auto
if (__DEV__) {
  removeUser1.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeUser1--mock

