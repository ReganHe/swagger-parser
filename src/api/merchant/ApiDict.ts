import {api} from './base'
import {Dict} from './modal'

const s = 'ApiDict.'

//#region addType--base auto
export namespace addType { export type O = Dict.addType.O; export type R = Dict.addType.R }
/**
 * 新增数据字典类型
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/add；
 */
export const addType = api<addType.O, addType.R>(s + 'addType', {path: '/1.0/dict/type/add', method: 'POST', body: 'id&typeKey&typeValue&typeDesc&status&createdBy&updatedBy'})
//#endregion addType--base
//#region addType--mock auto
if (__DEV__) {
  addType.mock('自动生成', () => {
    return {}
  })
}
//#endregion addType--mock


//#region addValue--base auto
export namespace addValue { export type O = Dict.addValue.O; export type R = Dict.addValue.R }
/**
 * 新增数据字典子项
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/add；
 */
export const addValue = api<addValue.O, addValue.R>(s + 'addValue', {path: '/1.0/dict/value/add', method: 'POST', body: 'id&typeId&dicCode&dicValue&dicDesc&status&createdBy&updatedBy'})
//#endregion addValue--base
//#region addValue--mock auto
if (__DEV__) {
  addValue.mock('自动生成', () => {
    return {}
  })
}
//#endregion addValue--mock


//#region getTypes--base auto
export namespace getTypes { export type O = Dict.getTypes.O; export type R = Dict.getTypes.R }
/**
 * 查询数据字典类型
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/get_list_paged；
 */
export const getTypes = api<getTypes.O, getTypes.R>(s + 'getTypes', {path: '/1.0/dict/type/get_list_paged', query: 'typeKey&pageNum&pageSize'})
//#endregion getTypes--base
//#region getTypes--mock auto
if (__DEV__) {
  getTypes.mock('自动生成', () => {
    return {}
  })
}
//#endregion getTypes--mock


//#region getValues--base auto
export namespace getValues { export type O = Dict.getValues.O; export type R = Dict.getValues.R }
/**
 * 查询数据字典子项
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_paged；
 */
export const getValues = api<getValues.O, getValues.R>(s + 'getValues', {path: '/1.0/dict/value/get_list_paged', query: 'typeId&pageNum&pageSize'})
//#endregion getValues--base
//#region getValues--mock auto
if (__DEV__) {
  getValues.mock('自动生成', () => {
    return {}
  })
}
//#endregion getValues--mock


//#region getValuesByKey--base auto
export namespace getValuesByKey { export type O = Dict.getValuesByKey.O; export type R = Dict.getValuesByKey.R }
/**
 * 使用字典编码查询所有字典子项值
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_bytypekey；
 */
export const getValuesByKey = api<getValuesByKey.O, getValuesByKey.R>(s + 'getValuesByKey', {path: '/1.0/dict/value/get_list_bytypekey', query: 'typeKey'})
//#endregion getValuesByKey--base
//#region getValuesByKey--mock auto
if (__DEV__) {
  getValuesByKey.mock('自动生成', () => {
    return {}
  })
}
//#endregion getValuesByKey--mock


//#region getValuesByKeys--base auto
export namespace getValuesByKeys { export type O = Dict.getValuesByKeys.O; export type R = Dict.getValuesByKeys.R }
/**
 * 使用字典编码集合查询所有字典子项值
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_by_type_keys；
 */
export const getValuesByKeys = api<getValuesByKeys.O, getValuesByKeys.R>(s + 'getValuesByKeys', {path: '/1.0/dict/value/get_list_by_type_keys', query: 'typeKeyList'})
//#endregion getValuesByKeys--base
//#region getValuesByKeys--mock auto
if (__DEV__) {
  getValuesByKeys.mock('自动生成', () => {
    return {}
  })
}
//#endregion getValuesByKeys--mock


//#region modifyType--base auto
export namespace modifyType { export type O = Dict.modifyType.O; export type R = Dict.modifyType.R }
/**
 * 修改数据字典类型
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/modify；
 */
export const modifyType = api<modifyType.O, modifyType.R>(s + 'modifyType', {path: '/1.0/dict/type/modify', method: 'PUT', body: 'id&typeKey&typeValue&typeDesc&status&createdBy&updatedBy'})
//#endregion modifyType--base
//#region modifyType--mock auto
if (__DEV__) {
  modifyType.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyType--mock


//#region modifyValue--base auto
export namespace modifyValue { export type O = Dict.modifyValue.O; export type R = Dict.modifyValue.R }
/**
 * 修改数据字典子项
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/modify；
 */
export const modifyValue = api<modifyValue.O, modifyValue.R>(s + 'modifyValue', {path: '/1.0/dict/value/modify', method: 'PUT', body: 'id&typeId&dicCode&dicValue&dicDesc&status&createdBy&updatedBy'})
//#endregion modifyValue--base
//#region modifyValue--mock auto
if (__DEV__) {
  modifyValue.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyValue--mock


//#region removeType--base auto
export namespace removeType { export type O = Dict.removeType.O; export type R = Dict.removeType.R }
/**
 * 删除数据字典类型
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/remove/{id}；
 */
export const removeType = api<removeType.O, removeType.R>(s + 'removeType', {path: '/1.0/dict/type/remove/:id', method: 'DELETE'})
//#endregion removeType--base
//#region removeType--mock auto
if (__DEV__) {
  removeType.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeType--mock


//#region removeValue--base auto
export namespace removeValue { export type O = Dict.removeValue.O; export type R = Dict.removeValue.R }
/**
 * 删除数据字典子项
 *
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/remove/{id}；
 */
export const removeValue = api<removeValue.O, removeValue.R>(s + 'removeValue', {path: '/1.0/dict/value/remove/:id', method: 'DELETE'})
//#endregion removeValue--base
//#region removeValue--mock auto
if (__DEV__) {
  removeValue.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeValue--mock

