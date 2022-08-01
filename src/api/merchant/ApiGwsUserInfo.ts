import {api} from './base'
import {GwsUserInfo} from './modal'

const s = 'ApiGwsUserInfo.'

//#region modifyPassword--base auto
export namespace modifyPassword { export type O = GwsUserInfo.modifyPassword.O; export type R = GwsUserInfo.modifyPassword.R }
/**
 * 修改密码
 *
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/modify_password；
 */
export const modifyPassword = api<modifyPassword.O, modifyPassword.R>(s + 'modifyPassword', {path: '/account/modify_password', method: 'POST', body: 'originalPassword&newPassword'})
//#endregion modifyPassword--base
//#region modifyPassword--mock auto
if (__DEV__) {
  modifyPassword.mock('自动生成', () => {
    return {}
  })
}
//#endregion modifyPassword--mock


//#region resetPassword--base auto
export namespace resetPassword { export type O = GwsUserInfo.resetPassword.O; export type R = GwsUserInfo.resetPassword.R }
/**
 * 重置密码
 *
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/reset_password；
 */
export const resetPassword = api<resetPassword.O, resetPassword.R>(s + 'resetPassword', {path: '/account/reset_password', method: 'POST', body: 'id&resetPassword'})
//#endregion resetPassword--base
//#region resetPassword--mock auto
if (__DEV__) {
  resetPassword.mock('自动生成', () => {
    return {}
  })
}
//#endregion resetPassword--mock


//#region getCurrentLoginUserInfo--base auto
export namespace getCurrentLoginUserInfo { export type R = GwsUserInfo.getCurrentLoginUserInfo.R }
/**
 * 获取当前登录用户信息
 *
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/get_current_login_user_info；
 */
export const getCurrentLoginUserInfo = api<getCurrentLoginUserInfo.R>(s + 'getCurrentLoginUserInfo', {path: '/account/get_current_login_user_info'})
//#endregion getCurrentLoginUserInfo--base
//#region getCurrentLoginUserInfo--mock auto
if (__DEV__) {
  getCurrentLoginUserInfo.mock('自动生成', () => {
    return {}
  })
}
//#endregion getCurrentLoginUserInfo--mock

