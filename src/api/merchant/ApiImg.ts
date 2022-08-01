import {api} from './base'
import {Img} from './modal'

const s = 'ApiImg.'

//#region getUploadFile--base auto
export namespace getUploadFile { export type R = Img.getUploadFile.R }
/**
 * 下载上传文件
 *
 *
 * **TAG:** 多媒体服务； &nbsp;&nbsp; **PATH:** /1.0/img/get_upload_file；
 */
export const getUploadFile = api<getUploadFile.R>(s + 'getUploadFile', {path: '/1.0/img/get_upload_file'})
//#endregion getUploadFile--base
//#region getUploadFile--mock auto
if (__DEV__) {
  getUploadFile.mock('自动生成', () => {
    return {}
  })
}
//#endregion getUploadFile--mock

