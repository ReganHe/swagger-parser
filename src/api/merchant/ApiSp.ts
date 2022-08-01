import {api} from './base'
import {Sp} from './modal'

const s = 'ApiSp.'

//#region getByYear--base auto
export namespace getByYear { export type O = Sp.getByYear.O; export type R = Sp.getByYear.R }
/**
 * 按年份查询安全检测计划表
 *
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/get_by_year；
 */
export const getByYear = api<getByYear.O, getByYear.R>(s + 'getByYear', {path: '/1.0/sp/get_by_year', query: 'year'})
//#endregion getByYear--base
//#region getByYear--mock auto
if (__DEV__) {
  getByYear.mock('自动生成', () => {
    return {}
  })
}
//#endregion getByYear--mock


//#region removeStation--base auto
export namespace removeStation { export type O = Sp.removeStation.O; export type R = Sp.removeStation.R }
/**
 * 移除计划中的站点
 *
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/remove_station；
 */
export const removeStation = api<removeStation.O, removeStation.R>(s + 'removeStation', {path: '/1.0/sp/remove_station', method: 'PUT', body: 'id&removeStation'})
//#endregion removeStation--base
//#region removeStation--mock auto
if (__DEV__) {
  removeStation.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeStation--mock


//#region persist--base auto
export namespace persist { export type O = Sp.persist.O; export type R = Sp.persist.R }
/**
 * 持久化安全检查计划
 *
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/persist；
 */
export const persist = api<persist.O, persist.R>(s + 'persist', {path: '/1.0/sp/persist', method: 'PUT', body: 'planYear&planId&planMonthId&stationList'})
//#endregion persist--base
//#region persist--mock auto
if (__DEV__) {
  persist.mock('自动生成', () => {
    return {}
  })
}
//#endregion persist--mock

