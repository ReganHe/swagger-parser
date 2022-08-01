import {api} from './base'
import {GwsToken} from './modal'

const s = 'ApiGwsToken.'

//#region preLogin--base auto
export namespace preLogin { export type O = GwsToken.preLogin.O; export type R = GwsToken.preLogin.R }
/**
 * 预登录并签发临时令牌(Short Term Token)
 *
 * 前端接口调用
 *
 *
 * **TAG:** 01.账号预登录服务； &nbsp;&nbsp; **PATH:** /account/pre_login；
 */
export const preLogin = api<preLogin.O, preLogin.R>(s + 'preLogin', {path: '/account/pre_login', method: 'POST', body: 'loginName&password&captcha&bindKey'})
//#endregion preLogin--base
//#region preLogin--mock auto
if (__DEV__) {
  preLogin.mock('自动生成', () => {
    return {}
  })
}
//#endregion preLogin--mock


//#region exchangeRefreshToken--base auto
export namespace exchangeRefreshToken { export type O = GwsToken.exchangeRefreshToken.O; export type R = GwsToken.exchangeRefreshToken.R }
/**
 * 交换正式令牌(Refresh Token)
 *
 *
 * **TAG:** 01.账号预登录服务； &nbsp;&nbsp; **PATH:** /account/exchange_refresh_token；
 */
export const exchangeRefreshToken = api<exchangeRefreshToken.O, exchangeRefreshToken.R>(s + 'exchangeRefreshToken', {path: '/account/exchange_refresh_token', method: 'POST', body: 'applicationId&shortTermToken'})
//#endregion exchangeRefreshToken--base
//#region exchangeRefreshToken--mock auto
if (__DEV__) {
  exchangeRefreshToken.mock('自动生成', () => {
    return {}
  })
}
//#endregion exchangeRefreshToken--mock

