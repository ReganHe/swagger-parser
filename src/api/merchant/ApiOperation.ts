import {api} from './base'
import {Operation} from './modal'

const s = 'ApiOperation.'

//#region getOperationLogPaged--base auto
export namespace getOperationLogPaged { export type O = Operation.getOperationLogPaged.O; export type R = Operation.getOperationLogPaged.R }
/**
 * 分页查询操作日志
 *
 *
 * **TAG:** 日志服务； &nbsp;&nbsp; **PATH:** /1.0/operation/p/get_operation_paged；
 */
export const getOperationLogPaged = api<getOperationLogPaged.O, getOperationLogPaged.R>(s + 'getOperationLogPaged', {path: '/1.0/operation/p/get_operation_paged', query: 'userId&beginTime&endTime&pageNum&pageSize'})
//#endregion getOperationLogPaged--base
//#region getOperationLogPaged--mock auto
if (__DEV__) {
  getOperationLogPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOperationLogPaged--mock

