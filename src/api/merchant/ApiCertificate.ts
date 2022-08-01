import {api} from './base'
import {Certificate} from './modal'

const s = 'ApiCertificate.'

//#region add4--base auto
export namespace add4 { export type O = Certificate.add4.O; export type R = Certificate.add4.R }
/**
 * 新增人员证书信息
 *
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/add；
 */
export const add4 = api<add4.O, add4.R>(s + 'add4', {path: '/1.0/certificate_manage/add', method: 'POST', body: 'id&fileName&url&relationKey&effectiveDay&expiryDay&expireRemind&certificateType&certificateNo&issuingUnit&periodOfValidity&remark'})
//#endregion add4--base
//#region add4--mock auto
if (__DEV__) {
  add4.mock('自动生成', () => {
    return {}
  })
}
//#endregion add4--mock


//#region getInfoPaged--base auto
export namespace getInfoPaged { export type O = Certificate.getInfoPaged.O; export type R = Certificate.getInfoPaged.R }
/**
 * 分页查询证书汇总
 *
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/get_info_paged；
 */
export const getInfoPaged = api<getInfoPaged.O, getInfoPaged.R>(s + 'getInfoPaged', {path: '/1.0/certificate_manage/get_info_paged', query: 'queryKey&orgId&certificateType&fileStatusList'})
//#endregion getInfoPaged--base
//#region getInfoPaged--mock auto
if (__DEV__) {
  getInfoPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getInfoPaged--mock


//#region getInfoOne--base auto
export namespace getInfoOne { export type O = Certificate.getInfoOne.O; export type R = Certificate.getInfoOne.R }
/**
 * 查询人员证书信息
 *
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/get_info_one/{id}；
 */
export const getInfoOne = api<getInfoOne.O, getInfoOne.R>(s + 'getInfoOne', {path: '/1.0/certificate_manage/get_info_one/:id'})
//#endregion getInfoOne--base
//#region getInfoOne--mock auto
if (__DEV__) {
  getInfoOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getInfoOne--mock


//#region edit4--base auto
export namespace edit4 { export type O = Certificate.edit4.O; export type R = Certificate.edit4.R }
/**
 * 编辑人员证书信息
 *
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/edit；
 */
export const edit4 = api<edit4.O, edit4.R>(s + 'edit4', {path: '/1.0/certificate_manage/edit', method: 'PUT', body: 'id&fileName&url&relationKey&effectiveDay&expiryDay&expireRemind&certificateType&certificateNo&issuingUnit&periodOfValidity&remark'})
//#endregion edit4--base
//#region edit4--mock auto
if (__DEV__) {
  edit4.mock('自动生成', () => {
    return {}
  })
}
//#endregion edit4--mock

