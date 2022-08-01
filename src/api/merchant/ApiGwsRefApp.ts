import {api} from './base'
import {GwsRefApp} from './modal'

const s = 'ApiGwsRefApp.'

//#region addRefApplication--base auto
export namespace addRefApplication { export type O = GwsRefApp.addRefApplication.O; export type R = GwsRefApp.addRefApplication.R }
/**
 * 添加应用与应用管理员的关联
 *
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/add；
 */
export const addRefApplication = api<addRefApplication.O, addRefApplication.R>(s + 'addRefApplication', {path: '/mgr/application_admin/ref_app/add', method: 'POST'})
//#endregion addRefApplication--base
//#region addRefApplication--mock auto
if (__DEV__) {
  addRefApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion addRefApplication--mock


//#region findRefApplicationsPaged--base auto
export namespace findRefApplicationsPaged { export type O = GwsRefApp.findRefApplicationsPaged.O; export type R = GwsRefApp.findRefApplicationsPaged.R }
/**
 * 分页获取与应用关联的应用管理员列表
 *
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/get_list_paged；
 */
export const findRefApplicationsPaged = api<findRefApplicationsPaged.O, findRefApplicationsPaged.R>(s + 'findRefApplicationsPaged', {path: '/mgr/application_admin/ref_app/get_list_paged', query: 'loginName&userName&page_num&page_size'})
//#endregion findRefApplicationsPaged--base
//#region findRefApplicationsPaged--mock auto
if (__DEV__) {
  findRefApplicationsPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion findRefApplicationsPaged--mock


//#region removeRefApplication--base auto
export namespace removeRefApplication { export type O = GwsRefApp.removeRefApplication.O; export type R = GwsRefApp.removeRefApplication.R }
/**
 * 删除应用与应用管理员的关联
 *
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/remove/{id}；
 */
export const removeRefApplication = api<removeRefApplication.O, removeRefApplication.R>(s + 'removeRefApplication', {path: '/mgr/application_admin/ref_app/remove/:id', method: 'DELETE'})
//#endregion removeRefApplication--base
//#region removeRefApplication--mock auto
if (__DEV__) {
  removeRefApplication.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeRefApplication--mock

