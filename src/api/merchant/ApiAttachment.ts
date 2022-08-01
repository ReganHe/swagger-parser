import {api} from './base'
import {Attachment} from './modal'

const s = 'ApiAttachment.'

//#region addAttachment--base auto
export namespace addAttachment { export type O = Attachment.addAttachment.O; export type R = Attachment.addAttachment.R }
/**
 * 附件批量提交
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/add_attachment；
 */
export const addAttachment = api<addAttachment.O, addAttachment.R>(s + 'addAttachment', {path: '/1.0/attachment/add_attachment', method: 'POST', body: 'fileList'})
//#endregion addAttachment--base
//#region addAttachment--mock auto
if (__DEV__) {
  addAttachment.mock('自动生成', () => {
    return {}
  })
}
//#endregion addAttachment--mock


//#region uploadFile--base auto
export namespace uploadFile { export type O = Attachment.uploadFile.O; export type R = Attachment.uploadFile.R }
/**
 * 上传附件
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/upload_file；
 */
export const uploadFile = api<uploadFile.O, uploadFile.R>(s + 'uploadFile', {path: '/1.0/attachment/upload_file', method: 'POST', body: 'uploadFile'})
//#endregion uploadFile--base
//#region uploadFile--mock auto
if (__DEV__) {
  uploadFile.mock('自动生成', () => {
    return {}
  })
}
//#endregion uploadFile--mock


//#region getAttachmentById--base auto
export namespace getAttachmentById { export type O = Attachment.getAttachmentById.O; export type R = Attachment.getAttachmentById.R }
/**
 * 主键查询附件明细
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_attachment_by_id；
 */
export const getAttachmentById = api<getAttachmentById.O, getAttachmentById.R>(s + 'getAttachmentById', {path: '/1.0/attachment/get_attachment_by_id', query: 'id'})
//#endregion getAttachmentById--base
//#region getAttachmentById--mock auto
if (__DEV__) {
  getAttachmentById.mock('自动生成', () => {
    return {}
  })
}
//#endregion getAttachmentById--mock


//#region getSafeAttachmentPaged--base auto
export namespace getSafeAttachmentPaged { export type O = Attachment.getSafeAttachmentPaged.O; export type R = Attachment.getSafeAttachmentPaged.R }
/**
 * 分页查询安全管理制度附件列表
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_safe_attachment_paged；
 */
export const getSafeAttachmentPaged = api<getSafeAttachmentPaged.O, getSafeAttachmentPaged.R>(s + 'getSafeAttachmentPaged', {path: '/1.0/attachment/get_safe_attachment_paged', query: 'fileName&relationKey&fileStatus&type&pageNum&pageSize'})
//#endregion getSafeAttachmentPaged--base
//#region getSafeAttachmentPaged--mock auto
if (__DEV__) {
  getSafeAttachmentPaged.mock('自动生成', () => {
    return {}
  })
}
//#endregion getSafeAttachmentPaged--mock


//#region getStationAttachments--base auto
export namespace getStationAttachments { export type O = Attachment.getStationAttachments.O; export type R = Attachment.getStationAttachments.R }
/**
 * 分页查询站点附件列表
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_station_attachments；
 */
export const getStationAttachments = api<getStationAttachments.O, getStationAttachments.R>(s + 'getStationAttachments', {path: '/1.0/attachment/get_station_attachments', query: 'fileName&relationKey&fileStatus&type'})
//#endregion getStationAttachments--base
//#region getStationAttachments--mock auto
if (__DEV__) {
  getStationAttachments.mock('自动生成', () => {
    return {}
  })
}
//#endregion getStationAttachments--mock


//#region downloadAttachment--base auto
export namespace downloadAttachment { export type O = Attachment.downloadAttachment.O; export type R = Attachment.downloadAttachment.R }
/**
 * 下载附件
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/download_attachment；
 */
export const downloadAttachment = api<downloadAttachment.O, downloadAttachment.R>(s + 'downloadAttachment', {path: '/1.0/attachment/download_attachment', query: 'id'})
//#endregion downloadAttachment--base
//#region downloadAttachment--mock auto
if (__DEV__) {
  downloadAttachment.mock('自动生成', () => {
    return {}
  })
}
//#endregion downloadAttachment--mock


//#region downloadTag--base auto
export namespace downloadTag { export type O = Attachment.downloadTag.O; export type R = Attachment.downloadTag.R }
/**
 * 打包下载
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/download_tag；
 */
export const downloadTag = api<downloadTag.O, downloadTag.R>(s + 'downloadTag', {path: '/1.0/attachment/download_tag', query: 'relationKey&type'})
//#endregion downloadTag--base
//#region downloadTag--mock auto
if (__DEV__) {
  downloadTag.mock('自动生成', () => {
    return {}
  })
}
//#endregion downloadTag--mock


//#region editAttachment--base auto
export namespace editAttachment { export type O = Attachment.editAttachment.O; export type R = Attachment.editAttachment.R }
/**
 * 更新附件
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/edit_attachment；
 */
export const editAttachment = api<editAttachment.O, editAttachment.R>(s + 'editAttachment', {path: '/1.0/attachment/edit_attachment', method: 'PUT', body: 'id&fileName&url&type&relationKey&effectiveDay&expiryDay&expireRemind'})
//#endregion editAttachment--base
//#region editAttachment--mock auto
if (__DEV__) {
  editAttachment.mock('自动生成', () => {
    return {}
  })
}
//#endregion editAttachment--mock


//#region removeAttachment--base auto
export namespace removeAttachment { export type O = Attachment.removeAttachment.O; export type R = Attachment.removeAttachment.R }
/**
 * 删除附件
 *
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/remove_attachment/{id}；
 */
export const removeAttachment = api<removeAttachment.O, removeAttachment.R>(s + 'removeAttachment', {path: '/1.0/attachment/remove_attachment/:id', method: 'DELETE'})
//#endregion removeAttachment--base
//#region removeAttachment--mock auto
if (__DEV__) {
  removeAttachment.mock('自动生成', () => {
    return {}
  })
}
//#endregion removeAttachment--mock

