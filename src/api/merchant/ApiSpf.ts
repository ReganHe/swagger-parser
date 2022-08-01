import {api} from './base'
import {Spf} from './modal'

const s = 'ApiSpf.'

//#region add2--base auto
export namespace add2 { export type O = Spf.add2.O; export type R = Spf.add2.R }
/**
 * 新增检测报告文件
 *
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/add；
 */
export const add2 = api<add2.O, add2.R>(s + 'add2', {path: '/1.0/spf/add', method: 'POST', body: 'planId&stationId&fileList'})
//#endregion add2--base
//#region add2--mock auto
if (__DEV__) {
  add2.mock('自动生成', () => {
    return {}
  })
}
//#endregion add2--mock


//#region getPaged2--base auto
export namespace getPaged2 { export type O = Spf.getPaged2.O; export type R = Spf.getPaged2.R }
/**
 * 分页查询全检测计划文件
 *
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/get_paged；
 */
export const getPaged2 = api<getPaged2.O, getPaged2.R>(s + 'getPaged2', {path: '/1.0/spf/get_paged', query: 'planId&stationId&fileStatus&pageNum&pageSize'})
//#endregion getPaged2--base
//#region getPaged2--mock auto
if (__DEV__) {
  getPaged2.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged2--mock


//#region getOne2--base auto
export namespace getOne2 { export type O = Spf.getOne2.O; export type R = Spf.getOne2.R }
/**
 * 主键查询全检测计划文件
 *
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/get_one；
 */
export const getOne2 = api<getOne2.O, getOne2.R>(s + 'getOne2', {path: '/1.0/spf/get_one', query: 'id'})
//#endregion getOne2--base
//#region getOne2--mock auto
if (__DEV__) {
  getOne2.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne2--mock


//#region edit2--base auto
export namespace edit2 { export type O = Spf.edit2.O; export type R = Spf.edit2.R }
/**
 * 编辑检测报告文件
 *
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/edit；
 */
export const edit2 = api<edit2.O, edit2.R>(s + 'edit2', {path: '/1.0/spf/edit', method: 'PUT', body: 'id&planId&stationId&fileList'})
//#endregion edit2--base
//#region edit2--mock auto
if (__DEV__) {
  edit2.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit2--mock


//#region remove1--base auto
export namespace remove1 { export type O = Spf.remove1.O; export type R = Spf.remove1.R }
/**
 * 删除检测报告文件
 *
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/remove/{id}；
 */
export const remove1 = api<remove1.O, remove1.R>(s + 'remove1', {path: '/1.0/spf/remove/:id', method: 'DELETE'})
//#endregion remove1--base
//#region remove1--mock auto
if (__DEV__) {
  remove1.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove1--mock

