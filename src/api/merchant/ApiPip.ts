import {api} from './base'
import {Pip} from './modal'

const s = 'ApiPip.'

//#region add3--base auto
export namespace add3 { export type O = Pip.add3.O; export type R = Pip.add3.R }
/**
 * 新增压力管道
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/add；
 */
export const add3 = api<add3.O, add3.R>(s + 'add3', {path: '/1.0/pip/add', method: 'POST', body: 'name&stationId&code&level&designUnit&installationUnit&installDate&useDate&nominalDiameter&nominalWallThickness&pipeLength&pressure&temperature&medium&conclusion&inspectionUnit&nextInspectionDate&remark'})
//#endregion add3--base
//#region add3--mock auto
if (__DEV__) {
  add3.mock('自动生成', () => {
    return {}
  })
}
//#endregion add3--mock


//#region getPaged3--base auto
export namespace getPaged3 { export type O = Pip.getPaged3.O; export type R = Pip.getPaged3.R }
/**
 * 分页查询设备列表
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_paged；
 */
export const getPaged3 = api<getPaged3.O, getPaged3.R>(s + 'getPaged3', {path: '/1.0/pip/get_paged', query: 'stationId&code&pageNum&pageSize'})
//#endregion getPaged3--base
//#region getPaged3--mock auto
if (__DEV__) {
  getPaged3.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged3--mock


//#region getPipeLengthSum--base auto
export namespace getPipeLengthSum { export type R = Pip.getPipeLengthSum.R }
/**
 * 查询所有管道长度
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_length；
 */
export const getPipeLengthSum = api<getPipeLengthSum.R>(s + 'getPipeLengthSum', {path: '/1.0/pip/get_length'})
//#endregion getPipeLengthSum--base
//#region getPipeLengthSum--mock auto
if (__DEV__) {
  getPipeLengthSum.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPipeLengthSum--mock


//#region getOne3--base auto
export namespace getOne3 { export type O = Pip.getOne3.O; export type R = Pip.getOne3.R }
/**
 * 主键查询压力管道明细
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_one；
 */
export const getOne3 = api<getOne3.O, getOne3.R>(s + 'getOne3', {path: '/1.0/pip/get_one', query: 'id'})
//#endregion getOne3--base
//#region getOne3--mock auto
if (__DEV__) {
  getOne3.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOne3--mock


//#region discard1--base auto
export namespace discard1 { export type O = Pip.discard1.O; export type R = Pip.discard1.R }
/**
 * 废弃压力管道
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/discard；
 */
export const discard1 = api<discard1.O, discard1.R>(s + 'discard1', {path: '/1.0/pip/discard', method: 'PUT', body: 'id'})
//#endregion discard1--base
//#region discard1--mock auto
if (__DEV__) {
  discard1.mock('自动生成', () => {
    return {}
  })
}
//#endregion discard1--mock


//#region edit3--base auto
export namespace edit3 { export type O = Pip.edit3.O; export type R = Pip.edit3.R }
/**
 * 编辑压力管道
 *
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/edit；
 */
export const edit3 = api<edit3.O, edit3.R>(s + 'edit3', {path: '/1.0/pip/edit', method: 'PUT', body: 'id&stationId&name&code&level&designUnit&installationUnit&installDate&useDate&nominalDiameter&nominalWallThickness&pipeLength&pressure&temperature&medium&conclusion&inspectionUnit&nextInspectionDate&remark'})
//#endregion edit3--base
//#region edit3--mock auto
if (__DEV__) {
  edit3.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit3--mock

