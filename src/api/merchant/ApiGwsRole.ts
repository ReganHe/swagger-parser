import {api} from './base'
import {GwsRole} from './modal'

const s = 'ApiGwsRole.'

//#region saveRoleRefsMenuPermApi--base auto
export namespace saveRoleRefsMenuPermApi { export type O = GwsRole.saveRoleRefsMenuPermApi.O; export type R = GwsRole.saveRoleRefsMenuPermApi.R }
/**
 * 新增/更新角色配置的所有菜单&功能点&数据接口
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/save_refs_menu_perm_api；
 */
export const saveRoleRefsMenuPermApi = api<saveRoleRefsMenuPermApi.O, saveRoleRefsMenuPermApi.R>(s + 'saveRoleRefsMenuPermApi', {path: '/mgr/role/save_refs_menu_perm_api', method: 'POST', body: 'roleId&menuIds&permIds&apiIds'})
//#endregion saveRoleRefsMenuPermApi--base
//#region saveRoleRefsMenuPermApi--mock auto
if (__DEV__) {
  saveRoleRefsMenuPermApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion saveRoleRefsMenuPermApi--mock


//#region addRole--base auto
export namespace addRole { export type O = GwsRole.addRole.O; export type R = GwsRole.addRole.R }
/**
 * 新增角色
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/add；
 */
export const addRole = api<addRole.O, addRole.R>(s + 'addRole', {path: '/mgr/role/add', method: 'POST', body: 'name&code&type&description&status'})
//#endregion addRole--base
//#region addRole--mock auto
if (__DEV__) {
  addRole.mock('自动生成', () => {
    return {}
  })
}
//#endregion addRole--mock


//#region findAllApisPaged--base auto
export namespace findAllApisPaged { export type O = GwsRole.findAllApisPaged.O; export type R = GwsRole.findAllApisPaged.R }
/**
 * 分页获取所有数据接口
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_api_list_paged；
 */
export const findAllApisPaged = api<findAllApisPaged.O, findAllApisPaged.R>(s + 'findAllApisPaged', {path: '/mgr/role/get_api_list_paged', query: 'page_num&page_size'})
//#endregion findAllApisPaged--base
//#region findAllApisPaged--mock auto
if (__DEV__) {
  findAllApisPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findAllApisPaged--mock


//#region findAllRoleRefsMenuPermApi--base auto
export namespace findAllRoleRefsMenuPermApi { export type O = GwsRole.findAllRoleRefsMenuPermApi.O; export type R = GwsRole.findAllRoleRefsMenuPermApi.R }
/**
 * 获取角色已配置的所有菜单&功能点&数据接口
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_refs_menu_perm_api_list/{id}；
 */
export const findAllRoleRefsMenuPermApi = api<findAllRoleRefsMenuPermApi.O, findAllRoleRefsMenuPermApi.R>(s + 'findAllRoleRefsMenuPermApi', {path: '/mgr/role/get_refs_menu_perm_api_list/:id'})
//#endregion findAllRoleRefsMenuPermApi--base
//#region findAllRoleRefsMenuPermApi--mock auto
if (__DEV__) {
  findAllRoleRefsMenuPermApi.mock('自动生成', () => {
    return {}
  })
}
//#endregion findAllRoleRefsMenuPermApi--mock


//#region findStaticMenu--base auto
export namespace findStaticMenu { export type R = GwsRole.findStaticMenu.R }
/**
 * 获取所有功能点（树形式）
 *
 * 将功能点以设备分组的静态树形式展现
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_as_tree；
 */
export const findStaticMenu = api<findStaticMenu.R>(s + 'findStaticMenu', {path: '/mgr/role/get_as_tree'})
//#endregion findStaticMenu--base
//#region findStaticMenu--mock auto
if (__DEV__) {
  findStaticMenu.mock('自动生成', () => {
    return {}
  })
}
//#endregion findStaticMenu--mock


//#region findRolesPaged--base auto
export namespace findRolesPaged { export type O = GwsRole.findRolesPaged.O; export type R = GwsRole.findRolesPaged.R }
/**
 * 分页获取角色
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_list_paged；
 */
export const findRolesPaged = api<findRolesPaged.O, findRolesPaged.R>(s + 'findRolesPaged', {path: '/mgr/role/get_list_paged', query: 'name&code&type&status&page_num&page_size'})
//#endregion findRolesPaged--base
//#region findRolesPaged--mock auto
if (__DEV__) {
  findRolesPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findRolesPaged--mock


//#region findOneRole--base auto
export namespace findOneRole { export type O = GwsRole.findOneRole.O; export type R = GwsRole.findOneRole.R }
/**
 * 获取单个角色信息
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_one/{id}；
 */
export const findOneRole = api<findOneRole.O, findOneRole.R>(s + 'findOneRole', {path: '/mgr/role/get_one/:id'})
//#endregion findOneRole--base
//#region findOneRole--mock auto
if (__DEV__) {
  findOneRole.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneRole--mock


//#region modifyRole--base auto
export namespace modifyRole { export type O = GwsRole.modifyRole.O; export type R = GwsRole.modifyRole.R }
/**
 * 修改角色
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/modify；
 */
export const modifyRole = api<modifyRole.O, modifyRole.R>(s + 'modifyRole', {path: '/mgr/role/modify', method: 'PUT', body: 'id&name&code&type&description&status'})
//#endregion modifyRole--base
//#region modifyRole--mock auto
if (__DEV__) {
  modifyRole.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyRole--mock


//#region removeRole--base auto
export namespace removeRole { export type O = GwsRole.removeRole.O; export type R = GwsRole.removeRole.R }
/**
 * 删除角色
 *
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/remove/{id}；
 */
export const removeRole = api<removeRole.O, removeRole.R>(s + 'removeRole', {path: '/mgr/role/remove/:id', method: 'DELETE'})
//#endregion removeRole--base
//#region removeRole--mock auto
if (__DEV__) {
  removeRole.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeRole--mock

