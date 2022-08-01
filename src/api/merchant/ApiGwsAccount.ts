import {api} from './base'
import {GwsAccount} from './modal'

const s = 'ApiGwsAccount.'

//#region accountLogin4Frontend--base auto
export namespace accountLogin4Frontend { export type O = GwsAccount.accountLogin4Frontend.O; export type R = GwsAccount.accountLogin4Frontend.R }
/**
 * 登录并签发令牌(Refresh Token)
 *
 * 前端接口调用
 *
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/login；
 */
export const accountLogin4Frontend = api<accountLogin4Frontend.O, accountLogin4Frontend.R>(s + 'accountLogin4Frontend', {path: '/account/login', method: 'POST', body: 'applicationId&deviceId&loginName&wxUserId&password&captcha&bindKey'})
//#endregion accountLogin4Frontend--base
//#region accountLogin4Frontend--mock auto
if (__DEV__) {
  accountLogin4Frontend.mock('自动生成', () => {
    return {}
  })
}
//#endregion accountLogin4Frontend--mock


//#region exchangeAccessToken--base auto
export namespace exchangeAccessToken { export type O = GwsAccount.exchangeAccessToken.O; export type R = GwsAccount.exchangeAccessToken.R }
/**
 * 交换访问令牌
 *
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/exchange_access_token；
 */
export const exchangeAccessToken = api<exchangeAccessToken.O, exchangeAccessToken.R>(s + 'exchangeAccessToken', {path: '/account/exchange_access_token', method: 'POST', body: 'refreshToken'})
//#endregion exchangeAccessToken--base
//#region exchangeAccessToken--mock auto
if (__DEV__) {
  exchangeAccessToken.mock('自动生成', () => {
    return {}
  })
}
//#endregion exchangeAccessToken--mock


//#region accountLogin4Direct--base auto
export namespace accountLogin4Direct { export type O = GwsAccount.accountLogin4Direct.O; export type R = GwsAccount.accountLogin4Direct.R }
/**
 * 登录并签发令牌(Refresh Token)
 *
 * API接口调用
 *
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/login_direct；
 */
export const accountLogin4Direct = api<accountLogin4Direct.O, accountLogin4Direct.R>(s + 'accountLogin4Direct', {path: '/account/login_direct', method: 'POST', body: 'applicationId&deviceId&loginName&wxUserId&password&captcha&bindKey'})
//#endregion accountLogin4Direct--base
//#region accountLogin4Direct--mock auto
if (__DEV__) {
  accountLogin4Direct.mock('自动生成', () => {
    return {}
  })
}
//#endregion accountLogin4Direct--mock


//#region captcha--base auto
export namespace captcha { export type O = GwsAccount.captcha.O; export type R = GwsAccount.captcha.R }
/**
 * 获取验证码
 *
 * 1 - 普通类型，2 - 中文类型，3 - 算术类型
 *
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/captcha/{type}；
 */
export const captcha = api<captcha.O, captcha.R>(s + 'captcha', {path: '/account/captcha/:type'})
//#endregion captcha--base
//#region captcha--mock auto
if (__DEV__) {
  captcha.mock('自动生成', () => {
    return {}
  })
}
//#endregion captcha--mock


//#region accountLogout--base auto
export namespace accountLogout { export type R = GwsAccount.accountLogout.R }
/**
 * 退出登录
 *
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/logout；
 */
export const accountLogout = api<accountLogout.R>(s + 'accountLogout', {path: '/account/logout', method: 'DELETE'})
//#endregion accountLogout--base
//#region accountLogout--mock auto
if (__DEV__) {
  accountLogout.mock('自动生成', () => {
    return {}
  })
}
//#endregion accountLogout--mock

