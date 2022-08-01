import {api} from './base'
import {GwsPermission} from './modal'

const s = 'ApiGwsPermission.'

//#region addPerm--base auto
export namespace addPerm { export type O = GwsPermission.addPerm.O; export type R = GwsPermission.addPerm.R }
/**
 * 新增功能点
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/add；
 */
export const addPerm = api<addPerm.O, addPerm.R>(s + 'addPerm', {path: '/mgr/perm/add', method: 'POST', body: 'menuId&deviceId&name&perms&orderNo&status'})
//#endregion addPerm--base
//#region addPerm--mock auto
if (__DEV__) {
  addPerm.mock('自动生成', () => {
    return {}
  })
}
//#endregion addPerm--mock


//#region findPermsPaged--base auto
export namespace findPermsPaged { export type O = GwsPermission.findPermsPaged.O; export type R = GwsPermission.findPermsPaged.R }
/**
 * 分页获取功能点（列表形式）
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_list_paged；
 */
export const findPermsPaged = api<findPermsPaged.O, findPermsPaged.R>(s + 'findPermsPaged', {path: '/mgr/perm/get_list_paged', query: 'menuId&page_num&page_size'})
//#endregion findPermsPaged--base
//#region findPermsPaged--mock auto
if (__DEV__) {
  findPermsPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findPermsPaged--mock


//#region findOnePerm--base auto
export namespace findOnePerm { export type O = GwsPermission.findOnePerm.O; export type R = GwsPermission.findOnePerm.R }
/**
 * 获取单个功能点信息
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_one/{id}；
 */
export const findOnePerm = api<findOnePerm.O, findOnePerm.R>(s + 'findOnePerm', {path: '/mgr/perm/get_one/:id'})
//#endregion findOnePerm--base
//#region findOnePerm--mock auto
if (__DEV__) {
  findOnePerm.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOnePerm--mock


//#region findStaticMenu2--base auto
export namespace findStaticMenu2 { export type R = GwsPermission.findStaticMenu2.R }
/**
 * 获取所有功能点（树形式）
 *
 * 将功能点以设备分组的静态树形式展现
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_as_tree；
 */
export const findStaticMenu2 = api<findStaticMenu2.R>(s + 'findStaticMenu2', {path: '/mgr/perm/get_as_tree'})
//#endregion findStaticMenu2--base
//#region findStaticMenu2--mock auto
if (__DEV__) {
  findStaticMenu2.mock('自动生成', () => {
    return {}
  })
}
//#endregion findStaticMenu2--mock


//#region modifyPerm--base auto
export namespace modifyPerm { export type O = GwsPermission.modifyPerm.O; export type R = GwsPermission.modifyPerm.R }
/**
 * 修改功能点
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/modify；
 */
export const modifyPerm = api<modifyPerm.O, modifyPerm.R>(s + 'modifyPerm', {path: '/mgr/perm/modify', method: 'PUT', body: 'id&deviceId&name&perms&orderNo&status'})
//#endregion modifyPerm--base
//#region modifyPerm--mock auto
if (__DEV__) {
  modifyPerm.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyPerm--mock


//#region removePerm--base auto
export namespace removePerm { export type O = GwsPermission.removePerm.O; export type R = GwsPermission.removePerm.R }
/**
 * 删除功能点
 *
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/remove/{id}；
 */
export const removePerm = api<removePerm.O, removePerm.R>(s + 'removePerm', {path: '/mgr/perm/remove/:id', method: 'DELETE'})
//#endregion removePerm--base
//#region removePerm--mock auto
if (__DEV__) {
  removePerm.mock('自动生成', () => {
    return {}
  })
}
//#endregion removePerm--mock

