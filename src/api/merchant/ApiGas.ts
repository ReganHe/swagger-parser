import {api} from './base'
import {Gas} from './modal'

const s = 'ApiGas.'

//#region getGasPaged--base auto
export namespace getGasPaged { export type O = Gas.getGasPaged.O; export type R = Gas.getGasPaged.R }
/**
 * 分页条件查询用气列表
 *
 *
 * **TAG:** 用气监控服务； &nbsp;&nbsp; **PATH:** /1.0/gas/get_gas_paged；
 */
export const getGasPaged = api<getGasPaged.O, getGasPaged.R>(s + 'getGasPaged', {path: '/1.0/gas/get_gas_paged', query: 'stationId&beginTime&endTime&pageNum&pageSize'})
//#endregion getGasPaged--base
//#region getGasPaged--mock auto
if (__DEV__) {
  getGasPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getGasPaged--mock

