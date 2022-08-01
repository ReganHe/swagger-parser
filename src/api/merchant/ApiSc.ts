import {api} from './base'
import {Sc} from './modal'

const s = 'ApiSc.'

//#region getDayOne--base auto
export namespace getDayOne { export type O = Sc.getDayOne.O; export type R = Sc.getDayOne.R }
/**
 * 查询安全检查（日）详细
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_day_one；
 */
export const getDayOne = api<getDayOne.O, getDayOne.R>(s + 'getDayOne', {path: '/1.0/sc/get_day_one', query: 'id'})
//#endregion getDayOne--base
//#region getDayOne--mock auto
if (__DEV__) {
  getDayOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getDayOne--mock


//#region initDayInspectData--base auto
export namespace initDayInspectData { export type O = Sc.initDayInspectData.O; export type R = Sc.initDayInspectData.R }
/**
 * 初始化安全检查（日）检查单
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/init_day_inspect；
 */
export const initDayInspectData = api<initDayInspectData.O, initDayInspectData.R>(s + 'initDayInspectData', {path: '/1.0/sc/init_day_inspect', query: 'stationId'})
//#endregion initDayInspectData--base
//#region initDayInspectData--mock auto
if (__DEV__) {
  initDayInspectData.mock('自动生成', () => {
    return {}
  })
}
//#endregion initDayInspectData--mock


//#region getDayPaged--base auto
export namespace getDayPaged { export type O = Sc.getDayPaged.O; export type R = Sc.getDayPaged.R }
/**
 * 分页查询安全检查（日）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_day_paged；
 */
export const getDayPaged = api<getDayPaged.O, getDayPaged.R>(s + 'getDayPaged', {path: '/1.0/sc/get_day_paged', query: 'stationId&orderNo&status&checkResult&checkDate&checkStartDate&checkEndDate&submitStartDate&submitEndDate&type&pageNum&pageSize'})
//#endregion getDayPaged--base
//#region getDayPaged--mock auto
if (__DEV__) {
  getDayPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getDayPaged--mock


//#region getMonthOne--base auto
export namespace getMonthOne { export type O = Sc.getMonthOne.O; export type R = Sc.getMonthOne.R }
/**
 * 查询安全检查（月）详细
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_month_one；
 */
export const getMonthOne = api<getMonthOne.O, getMonthOne.R>(s + 'getMonthOne', {path: '/1.0/sc/get_month_one', query: 'id'})
//#endregion getMonthOne--base
//#region getMonthOne--mock auto
if (__DEV__) {
  getMonthOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getMonthOne--mock


//#region initMonthInspectData--base auto
export namespace initMonthInspectData { export type O = Sc.initMonthInspectData.O; export type R = Sc.initMonthInspectData.R }
/**
 * 初始化安全检查（月）检查单
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/init_month_inspect；
 */
export const initMonthInspectData = api<initMonthInspectData.O, initMonthInspectData.R>(s + 'initMonthInspectData', {path: '/1.0/sc/init_month_inspect', query: 'stationId'})
//#endregion initMonthInspectData--base
//#region initMonthInspectData--mock auto
if (__DEV__) {
  initMonthInspectData.mock('自动生成', () => {
    return {}
  })
}
//#endregion initMonthInspectData--mock


//#region getMonthPaged--base auto
export namespace getMonthPaged { export type O = Sc.getMonthPaged.O; export type R = Sc.getMonthPaged.R }
/**
 * 分页查询安全检查（月）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_month_paged；
 */
export const getMonthPaged = api<getMonthPaged.O, getMonthPaged.R>(s + 'getMonthPaged', {path: '/1.0/sc/get_month_paged', query: 'stationId&orderNo&status&checkResult&checkDate&checkStartDate&checkEndDate&submitStartDate&submitEndDate&type&pageNum&pageSize'})
//#endregion getMonthPaged--base
//#region getMonthPaged--mock auto
if (__DEV__) {
  getMonthPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getMonthPaged--mock


//#region dayPersist--base auto
export namespace dayPersist { export type O = Sc.dayPersist.O; export type R = Sc.dayPersist.R }
/**
 * 持久化安全检查（日）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/day_persist；
 */
export const dayPersist = api<dayPersist.O, dayPersist.R>(s + 'dayPersist', {path: '/1.0/sc/day_persist', method: 'PUT', body: 'id&stationId&inspector&groups&status&checkResult&checkDate&pvContentList&contentList'})
//#endregion dayPersist--base
//#region dayPersist--mock auto
if (__DEV__) {
  dayPersist.mock('自动生成', () => {
    return {}
  })
}
//#endregion dayPersist--mock


//#region monthPersist--base auto
export namespace monthPersist { export type O = Sc.monthPersist.O; export type R = Sc.monthPersist.R }
/**
 * 持久化安全检查（月）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/month_persist；
 */
export const monthPersist = api<monthPersist.O, monthPersist.R>(s + 'monthPersist', {path: '/1.0/sc/month_persist', method: 'PUT', body: 'id&stationId&inspector&status&checkResult&checkDate&monthList'})
//#endregion monthPersist--base
//#region monthPersist--mock auto
if (__DEV__) {
  monthPersist.mock('自动生成', () => {
    return {}
  })
}
//#endregion monthPersist--mock


//#region monthRemove--base auto
export namespace monthRemove { export type O = Sc.monthRemove.O; export type R = Sc.monthRemove.R }
/**
 * 删除安全检查单（月）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/month_remove/{id}；
 */
export const monthRemove = api<monthRemove.O, monthRemove.R>(s + 'monthRemove', {path: '/1.0/sc/month_remove/:id', method: 'DELETE'})
//#endregion monthRemove--base
//#region monthRemove--mock auto
if (__DEV__) {
  monthRemove.mock('自动生成', () => {
    return {}
  })
}
//#endregion monthRemove--mock


//#region dayRemove--base auto
export namespace dayRemove { export type O = Sc.dayRemove.O; export type R = Sc.dayRemove.R }
/**
 * 删除安全检查单（日）
 *
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/day_remove/{id}；
 */
export const dayRemove = api<dayRemove.O, dayRemove.R>(s + 'dayRemove', {path: '/1.0/sc/day_remove/:id', method: 'DELETE'})
//#endregion dayRemove--base
//#region dayRemove--mock auto
if (__DEV__) {
  dayRemove.mock('自动生成', () => {
    return {}
  })
}
//#endregion dayRemove--mock

