import {api} from './base'
import {GwsUser} from './modal'

const s = 'ApiGwsUser.'

//#region addUser--base auto
export namespace addUser { export type O = GwsUser.addUser.O; export type R = GwsUser.addUser.R }
/**
 * 新增扩展应用用户（内部）
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/add_ext；
 */
export const addUser = api<addUser.O, addUser.R>(s + 'addUser', {path: '/mgr/application_user/add_ext', method: 'POST', body: 'loginName&userName&password&status&userExtRefsList'})
//#endregion addUser--base
//#region addUser--mock auto
if (__DEV__) {
  addUser.mock('自动生成', () => {
    return {}
  })
}
//#endregion addUser--mock


//#region addUser1--base auto
export namespace addUser1 { export type O = GwsUser.addUser1.O; export type R = GwsUser.addUser1.R }
/**
 * 新增应用用户
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/add；
 */
export const addUser1 = api<addUser1.O, addUser1.R>(s + 'addUser1', {path: '/mgr/application_user/add', method: 'POST', body: 'loginName&userName&password&status&roleIds&deviceIds'})
//#endregion addUser1--base
//#region addUser1--mock auto
if (__DEV__) {
  addUser1.mock('自动生成', () => {
    return {}
  })
}
//#endregion addUser1--mock


//#region findOneUser--base auto
export namespace findOneUser { export type O = GwsUser.findOneUser.O; export type R = GwsUser.findOneUser.R }
/**
 * 获取单个应用用户信息（内部）
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/get_ext_one；
 */
export const findOneUser = api<findOneUser.O, findOneUser.R>(s + 'findOneUser', {path: '/mgr/application_user/get_ext_one', query: 'id&applicationIds'})
//#endregion findOneUser--base
//#region findOneUser--mock auto
if (__DEV__) {
  findOneUser.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneUser--mock


//#region findOneUser1--base auto
export namespace findOneUser1 { export type O = GwsUser.findOneUser1.O; export type R = GwsUser.findOneUser1.R }
/**
 * 获取单个应用用户信息
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/get_one/{id}；
 */
export const findOneUser1 = api<findOneUser1.O, findOneUser1.R>(s + 'findOneUser1', {path: '/mgr/application_user/get_one/:id'})
//#endregion findOneUser1--base
//#region findOneUser1--mock auto
if (__DEV__) {
  findOneUser1.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneUser1--mock


//#region modifyUser--base auto
export namespace modifyUser { export type O = GwsUser.modifyUser.O; export type R = GwsUser.modifyUser.R }
/**
 * 修改扩展应用用户（内部）
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/modify_ext；
 */
export const modifyUser = api<modifyUser.O, modifyUser.R>(s + 'modifyUser', {path: '/mgr/application_user/modify_ext', method: 'PUT', body: 'id&loginName&userName&password&status&userExtRefsList'})
//#endregion modifyUser--base
//#region modifyUser--mock auto
if (__DEV__) {
  modifyUser.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyUser--mock


//#region modifyUser1--base auto
export namespace modifyUser1 { export type O = GwsUser.modifyUser1.O; export type R = GwsUser.modifyUser1.R }
/**
 * 修改应用用户
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/modify；
 */
export const modifyUser1 = api<modifyUser1.O, modifyUser1.R>(s + 'modifyUser1', {path: '/mgr/application_user/modify', method: 'PUT', body: 'id&loginName&userName&password&status&roleIds&deviceIds'})
//#endregion modifyUser1--base
//#region modifyUser1--mock auto
if (__DEV__) {
  modifyUser1.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyUser1--mock


//#region removeUser--base auto
export namespace removeUser { export type O = GwsUser.removeUser.O; export type R = GwsUser.removeUser.R }
/**
 * 删除应用用户
 *
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/remove/{id}；
 */
export const removeUser = api<removeUser.O, removeUser.R>(s + 'removeUser', {path: '/mgr/application_user/remove/:id', method: 'DELETE'})
//#endregion removeUser--base
//#region removeUser--mock auto
if (__DEV__) {
  removeUser.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeUser--mock

