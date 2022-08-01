import {api} from './base'
import {Org} from './modal'

const s = 'ApiOrg.'

//#region getStationList--base auto
export namespace getStationList { export type R = Org.getStationList.R }
/**
 * 查询用户站点列表
 *
 *
 * **TAG:** 机构管理； &nbsp;&nbsp; **PATH:** /1.0/org/get_station_list；
 */
export const getStationList = api<getStationList.R>(s + 'getStationList', {path: '/1.0/org/get_station_list'})
//#endregion getStationList--base
//#region getStationList--mock auto
if (__DEV__) {
  getStationList.mock('自动生成', () => {
    return {}
  })
}
//#endregion getStationList--mock


//#region addWorker--base auto
export namespace addWorker { export type O = Org.addWorker.O; export type R = Org.addWorker.R }
/**
 * 添加员工
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/add；
 */
export const addWorker = api<addWorker.O, addWorker.R>(s + 'addWorker', {path: '/1.0/org_manage/worker/add', method: 'POST', body: 'orgId&workerNum&name&identityNum&mobile&jobType&groups&remark'})
//#endregion addWorker--base
//#region addWorker--mock auto
if (__DEV__) {
  addWorker.mock('自动生成', () => {
    return {}
  })
}
//#endregion addWorker--mock


//#region getOrgInfoPaged--base auto
export namespace getOrgInfoPaged { export type O = Org.getOrgInfoPaged.O; export type R = Org.getOrgInfoPaged.R }
/**
 * 站点机构分页查询
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/get_org_info_paged；
 */
export const getOrgInfoPaged = api<getOrgInfoPaged.O, getOrgInfoPaged.R>(s + 'getOrgInfoPaged', {path: '/1.0/org_manage/org/get_org_info_paged', query: 'queryKey&pageNum&pageSize'})
//#endregion getOrgInfoPaged--base
//#region getOrgInfoPaged--mock auto
if (__DEV__) {
  getOrgInfoPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOrgInfoPaged--mock


//#region getOrgInfoOne--base auto
export namespace getOrgInfoOne { export type O = Org.getOrgInfoOne.O; export type R = Org.getOrgInfoOne.R }
/**
 * 按主键查询站点机构信息
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/get_org_info/{id}；
 */
export const getOrgInfoOne = api<getOrgInfoOne.O, getOrgInfoOne.R>(s + 'getOrgInfoOne', {path: '/1.0/org_manage/org/get_org_info/:id'})
//#endregion getOrgInfoOne--base
//#region getOrgInfoOne--mock auto
if (__DEV__) {
  getOrgInfoOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOrgInfoOne--mock


//#region getWorkerOne--base auto
export namespace getWorkerOne { export type O = Org.getWorkerOne.O; export type R = Org.getWorkerOne.R }
/**
 * 根据主键查询员工信息
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get/{id}；
 */
export const getWorkerOne = api<getWorkerOne.O, getWorkerOne.R>(s + 'getWorkerOne', {path: '/1.0/org_manage/worker/get/:id'})
//#endregion getWorkerOne--base
//#region getWorkerOne--mock auto
if (__DEV__) {
  getWorkerOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getWorkerOne--mock


//#region getOrgWorkers--base auto
export namespace getOrgWorkers { export type O = Org.getOrgWorkers.O; export type R = Org.getOrgWorkers.R }
/**
 * 查询机构下员工列表
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get_org_workers；
 */
export const getOrgWorkers = api<getOrgWorkers.O, getOrgWorkers.R>(s + 'getOrgWorkers', {path: '/1.0/org_manage/worker/get_org_workers', query: 'orgId'})
//#endregion getOrgWorkers--base
//#region getOrgWorkers--mock auto
if (__DEV__) {
  getOrgWorkers.mock('自动生成', () => {
    return {}
  })
}
//#endregion getOrgWorkers--mock


//#region getWorkersList--base auto
export namespace getWorkersList { export type O = Org.getWorkersList.O; export type R = Org.getWorkersList.R }
/**
 * 查询员工列表
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get_list；
 */
export const getWorkersList = api<getWorkersList.O, getWorkersList.R>(s + 'getWorkersList', {path: '/1.0/org_manage/worker/get_list', query: 'orgId&name&jobTypeList&groups'})
//#endregion getWorkersList--base
//#region getWorkersList--mock auto
if (__DEV__) {
  getWorkersList.mock('自动生成', () => {
    return {}
  })
}
//#endregion getWorkersList--mock


//#region getWorkerAttachmentList--base auto
export namespace getWorkerAttachmentList { export type O = Org.getWorkerAttachmentList.O; export type R = Org.getWorkerAttachmentList.R }
/**
 * 查询员工资质证书
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/get_list；
 */
export const getWorkerAttachmentList = api<getWorkerAttachmentList.O, getWorkerAttachmentList.R>(s + 'getWorkerAttachmentList', {path: '/1.0/org_manage/worker/attachment/get_list', query: 'workerId'})
//#endregion getWorkerAttachmentList--base
//#region getWorkerAttachmentList--mock auto
if (__DEV__) {
  getWorkerAttachmentList.mock('自动生成', () => {
    return {}
  })
}
//#endregion getWorkerAttachmentList--mock


//#region modifyWorkerAttachmentBatch--base auto
export namespace modifyWorkerAttachmentBatch { export type O = Org.modifyWorkerAttachmentBatch.O; export type R = Org.modifyWorkerAttachmentBatch.R }
/**
 * 批量修改员工资质证书
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/modify_batch；
 */
export const modifyWorkerAttachmentBatch = api<modifyWorkerAttachmentBatch.O, modifyWorkerAttachmentBatch.R>(s + 'modifyWorkerAttachmentBatch', {path: '/1.0/org_manage/worker/attachment/modify_batch', method: 'PUT', body: 'workerId&WorkerAttachmentList'})
//#endregion modifyWorkerAttachmentBatch--base
//#region modifyWorkerAttachmentBatch--mock auto
if (__DEV__) {
  modifyWorkerAttachmentBatch.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyWorkerAttachmentBatch--mock


//#region modifyOrg--base auto
export namespace modifyOrg { export type O = Org.modifyOrg.O; export type R = Org.modifyOrg.R }
/**
 * 修改站点基本信息
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/modify；
 */
export const modifyOrg = api<modifyOrg.O, modifyOrg.R>(s + 'modifyOrg', {path: '/1.0/org_manage/org/modify', method: 'PUT', body: 'orgId&orgArea&address&phoneNum'})
//#endregion modifyOrg--base
//#region modifyOrg--mock auto
if (__DEV__) {
  modifyOrg.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyOrg--mock


//#region modifyWorker--base auto
export namespace modifyWorker { export type O = Org.modifyWorker.O; export type R = Org.modifyWorker.R }
/**
 * 修改员工信息
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/modify；
 */
export const modifyWorker = api<modifyWorker.O, modifyWorker.R>(s + 'modifyWorker', {path: '/1.0/org_manage/worker/modify', method: 'PUT', body: 'id&workerNum&name&identityNum&mobile&jobType&groups&remark'})
//#endregion modifyWorker--base
//#region modifyWorker--mock auto
if (__DEV__) {
  modifyWorker.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyWorker--mock


//#region removeWorker--base auto
export namespace removeWorker { export type O = Org.removeWorker.O; export type R = Org.removeWorker.R }
/**
 * 删除员工
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/remove/{id}；
 */
export const removeWorker = api<removeWorker.O, removeWorker.R>(s + 'removeWorker', {path: '/1.0/org_manage/worker/remove/:id', method: 'DELETE'})
//#endregion removeWorker--base
//#region removeWorker--mock auto
if (__DEV__) {
  removeWorker.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeWorker--mock


//#region removeWorkerAttachment--base auto
export namespace removeWorkerAttachment { export type O = Org.removeWorkerAttachment.O; export type R = Org.removeWorkerAttachment.R }
/**
 * 删除员工资质文件
 *
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/remove/{id}；
 */
export const removeWorkerAttachment = api<removeWorkerAttachment.O, removeWorkerAttachment.R>(s + 'removeWorkerAttachment', {path: '/1.0/org_manage/worker/attachment/remove/:id', method: 'DELETE'})
//#endregion removeWorkerAttachment--base
//#region removeWorkerAttachment--mock auto
if (__DEV__) {
  removeWorkerAttachment.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeWorkerAttachment--mock

