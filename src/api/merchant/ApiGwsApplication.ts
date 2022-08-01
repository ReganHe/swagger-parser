import {api} from './base'
import {GwsApplication} from './modal'

const s = 'ApiGwsApplication.'

//#region addApplication--base auto
export namespace addApplication { export type O = GwsApplication.addApplication.O; export type R = GwsApplication.addApplication.R }
/**
 * 新增应用
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/add；
 */
export const addApplication = api<addApplication.O, addApplication.R>(s + 'addApplication', {path: '/mgr/application/add', method: 'POST', body: 'name&code&type&description&status&userIds&deviceIds'})
//#endregion addApplication--base
//#region addApplication--mock auto
if (__DEV__) {
  addApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion addApplication--mock


//#region findApplicationsPaged--base auto
export namespace findApplicationsPaged { export type O = GwsApplication.findApplicationsPaged.O; export type R = GwsApplication.findApplicationsPaged.R }
/**
 * 分页获取应用列表
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_list_paged；
 */
export const findApplicationsPaged = api<findApplicationsPaged.O, findApplicationsPaged.R>(s + 'findApplicationsPaged', {path: '/mgr/application/get_list_paged', query: 'page_num&page_size'})
//#endregion findApplicationsPaged--base
//#region findApplicationsPaged--mock auto
if (__DEV__) {
  findApplicationsPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findApplicationsPaged--mock


//#region findOneApplication--base auto
export namespace findOneApplication { export type O = GwsApplication.findOneApplication.O; export type R = GwsApplication.findOneApplication.R }
/**
 * 获取单个应用信息
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_one/{id}；
 */
export const findOneApplication = api<findOneApplication.O, findOneApplication.R>(s + 'findOneApplication', {path: '/mgr/application/get_one/:id'})
//#endregion findOneApplication--base
//#region findOneApplication--mock auto
if (__DEV__) {
  findOneApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion findOneApplication--mock


//#region findPlatformAdmins--base auto
export namespace findPlatformAdmins { export type R = GwsApplication.findPlatformAdmins.R }
/**
 * 获取平台管理员列表
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_platform_admin_list；
 */
export const findPlatformAdmins = api<findPlatformAdmins.R>(s + 'findPlatformAdmins', {path: '/mgr/application/get_platform_admin_list'})
//#endregion findPlatformAdmins--base
//#region findPlatformAdmins--mock auto
if (__DEV__) {
  findPlatformAdmins.mock('自动生成', () => {
    return {}
  })
}
//#endregion findPlatformAdmins--mock


//#region findUserCenterApplication--base auto
export namespace findUserCenterApplication { export type R = GwsApplication.findUserCenterApplication.R }
/**
 * 获取应用中心所有应用的关联信息（包括角色、设备）
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_uc_list；
 */
export const findUserCenterApplication = api<findUserCenterApplication.R>(s + 'findUserCenterApplication', {path: '/mgr/application/get_uc_list'})
//#endregion findUserCenterApplication--base
//#region findUserCenterApplication--mock auto
if (__DEV__) {
  findUserCenterApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion findUserCenterApplication--mock


//#region modifyApplication--base auto
export namespace modifyApplication { export type O = GwsApplication.modifyApplication.O; export type R = GwsApplication.modifyApplication.R }
/**
 * 修改应用
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/modify；
 */
export const modifyApplication = api<modifyApplication.O, modifyApplication.R>(s + 'modifyApplication', {path: '/mgr/application/modify', method: 'PUT', body: 'id&name&code&type&description&status&userIds&deviceIds'})
//#endregion modifyApplication--base
//#region modifyApplication--mock auto
if (__DEV__) {
  modifyApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyApplication--mock


//#region removeApplication--base auto
export namespace removeApplication { export type O = GwsApplication.removeApplication.O; export type R = GwsApplication.removeApplication.R }
/**
 * 删除应用
 *
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/remove/{id}；
 */
export const removeApplication = api<removeApplication.O, removeApplication.R>(s + 'removeApplication', {path: '/mgr/application/remove/:id', method: 'DELETE'})
//#endregion removeApplication--base
//#region removeApplication--mock auto
if (__DEV__) {
  removeApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeApplication--mock

