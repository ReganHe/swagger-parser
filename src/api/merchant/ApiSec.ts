import {api} from './base'
import {Sec} from './modal'

const s = 'ApiSec.'

//#region initData--base auto
export namespace initData { export type O = Sec.initData.O; export type R = Sec.initData.R }
/**
 * 初始化特种设备检查单
 *
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/init_data；
 */
export const initData = api<initData.O, initData.R>(s + 'initData', {path: '/1.0/sec/init_data', query: 'stationId'})
//#endregion initData--base
//#region initData--mock auto
if (__DEV__) {
  initData.mock('自动生成', () => {
    return {}
  })
}
//#endregion initData--mock


//#region getPaged6--base auto
export namespace getPaged6 { export type O = Sec.getPaged6.O; export type R = Sec.getPaged6.R }
/**
 * 分页查询特种设备检查
 *
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/get_paged；
 */
export const getPaged6 = api<getPaged6.O, getPaged6.R>(s + 'getPaged6', {path: '/1.0/sec/get_paged', query: 'stationId&orderNo&status&checkResult&checkDate&checkStartDate&checkEndDate&submitStartDate&submitEndDate&pageNum&pageSize'})
//#endregion getPaged6--base
//#region getPaged6--mock auto
if (__DEV__) {
  getPaged6.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged6--mock


//#region getOne5--base auto
export namespace getOne5 { export type O = Sec.getOne5.O; export type R = Sec.getOne5.R }
/**
 * 查询特种设备检查单明细
 *
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/get_one；
 */
export const getOne5 = api<getOne5.O, getOne5.R>(s + 'getOne5', {path: '/1.0/sec/get_one', query: 'id'})
//#endregion getOne5--base
//#region getOne5--mock auto
if (__DEV__) {
  getOne5.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne5--mock


//#region persist1--base auto
export namespace persist1 { export type O = Sec.persist1.O; export type R = Sec.persist1.R }
/**
 * 持久化特种设备检查单
 *
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/persist；
 */
export const persist1 = api<persist1.O, persist1.R>(s + 'persist1', {path: '/1.0/sec/persist', method: 'PUT', body: 'id&equipId&stationId&inspector&status&checkResult&checkDate&abnormalContent&contentList'})
//#endregion persist1--base
//#region persist1--mock auto
if (__DEV__) {
  persist1.mock('自动生成', () => {
    return {}
  })
}
//#endregion persist1--mock


//#region remove3--base auto
export namespace remove3 { export type O = Sec.remove3.O; export type R = Sec.remove3.R }
/**
 * 删除特种设备检查单
 *
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/remove/{id}；
 */
export const remove3 = api<remove3.O, remove3.R>(s + 'remove3', {path: '/1.0/sec/remove/:id', method: 'DELETE'})
//#endregion remove3--base
//#region remove3--mock auto
if (__DEV__) {
  remove3.mock('自动生成', () => {
    return {}
  })
}
//#endregion remove3--mock

