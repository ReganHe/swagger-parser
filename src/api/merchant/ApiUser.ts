import {api} from './base'
import {User} from './modal'

const s = 'ApiUser.'

//#region getUserOne--base auto
export namespace getUserOne { export type O = User.getUserOne.O; export type R = User.getUserOne.R }
/**
 * 使用id查询用户
 *
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /1.0/user/get_users_one/{id}；
 */
export const getUserOne = api<getUserOne.O, getUserOne.R>(s + 'getUserOne', {path: '/1.0/user/get_users_one/:id'})
//#endregion getUserOne--base
//#region getUserOne--mock auto
if (__DEV__) {
  getUserOne.mock('自动生成', () => {
    return {}
  })
}
//#endregion getUserOne--mock


//#region getUserByUserId--base auto
export namespace getUserByUserId { export type O = User.getUserByUserId.O; export type R = User.getUserByUserId.R }
/**
 * 根据userId（非主键）查询用户机构以及机构下的站点
 *
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /1.0/user/get_user_one_detail/{userId}；
 */
export const getUserByUserId = api<getUserByUserId.O, getUserByUserId.R>(s + 'getUserByUserId', {path: '/1.0/user/get_user_one_detail/:userId'})
//#endregion getUserByUserId--base
//#region getUserByUserId--mock auto
if (__DEV__) {
  getUserByUserId.mock('自动生成', () => {
    return {}
  })
}
//#endregion getUserByUserId--mock

