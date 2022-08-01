import {api} from './base'
import {GwsMenu} from './modal'

const s = 'ApiGwsMenu.'

//#region addMenu--base auto
export namespace addMenu { export type O = GwsMenu.addMenu.O; export type R = GwsMenu.addMenu.R }
/**
 * 新增菜单
 *
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/add；
 */
export const addMenu = api<addMenu.O, addMenu.R>(s + 'addMenu', {path: '/mgr/menu/add', method: 'POST', body: 'deviceId&name&parentId&url&type&icon&orderNo&visible&status'})
//#endregion addMenu--base
//#region addMenu--mock auto
if (__DEV__) {
  addMenu.mock('自动生成', () => {
    return {}
  })
}
//#endregion addMenu--mock


//#region findStaticMenu1--base auto
export namespace findStaticMenu1 { export type R = GwsMenu.findStaticMenu1.R }
/**
 * 获取所有菜单
 *
 * 将菜单以设备分组的静态树形式展现
 *
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/get_as_tree；
 */
export const findStaticMenu1 = api<findStaticMenu1.R>(s + 'findStaticMenu1', {path: '/mgr/menu/get_as_tree'})
//#endregion findStaticMenu1--base
//#region findStaticMenu1--mock auto
if (__DEV__) {
  findStaticMenu1.mock('自动生成', () => {
    return {}
  })
}
//#endregion findStaticMenu1--mock


//#region modifyMenu--base auto
export namespace modifyMenu { export type O = GwsMenu.modifyMenu.O; export type R = GwsMenu.modifyMenu.R }
/**
 * 修改菜单
 *
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/modify；
 */
export const modifyMenu = api<modifyMenu.O, modifyMenu.R>(s + 'modifyMenu', {path: '/mgr/menu/modify', method: 'PUT', body: 'id&deviceId&name&parentId&url&type&icon&orderNo&visible&status'})
//#endregion modifyMenu--base
//#region modifyMenu--mock auto
if (__DEV__) {
  modifyMenu.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyMenu--mock


//#region removeMenu--base auto
export namespace removeMenu { export type O = GwsMenu.removeMenu.O; export type R = GwsMenu.removeMenu.R }
/**
 * 删除菜单
 *
 *
 * **TAG:** 05.菜单管理服务； &nbsp;&nbsp; **PATH:** /mgr/menu/remove/{id}；
 */
export const removeMenu = api<removeMenu.O, removeMenu.R>(s + 'removeMenu', {path: '/mgr/menu/remove/:id', method: 'DELETE'})
//#endregion removeMenu--base
//#region removeMenu--mock auto
if (__DEV__) {
  removeMenu.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeMenu--mock

