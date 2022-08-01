import {api} from './base'
import {Message} from './modal'

const s = 'ApiMessage.'

//#region messageRead--base auto
export namespace messageRead { export type O = Message.messageRead.O; export type R = Message.messageRead.R }
/**
 * 站内信已读
 *
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/message_read；
 */
export const messageRead = api<messageRead.O, messageRead.R>(s + 'messageRead', {path: '/1.0/message/message_read', method: 'POST', body: 'msgId'})
//#endregion messageRead--base
//#region messageRead--mock auto
if (__DEV__) {
  messageRead.mock('自动生成', () => {
    return {}
  })
}
//#endregion messageRead--mock


//#region getPaged4--base auto
export namespace getPaged4 { export type O = Message.getPaged4.O; export type R = Message.getPaged4.R }
/**
 * 分页条件查询站内信列表
 *
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/get_paged；
 */
export const getPaged4 = api<getPaged4.O, getPaged4.R>(s + 'getPaged4', {path: '/1.0/message/get_paged', query: 'status&stationId&beginTime&endTime&pageNum&pageSize'})
//#endregion getPaged4--base
//#region getPaged4--mock auto
if (__DEV__) {
  getPaged4.mock('自动生成', () => {
    return {}
  })
}
//#endregion getPaged4--mock


//#region getUnreadCount--base auto
export namespace getUnreadCount { export type R = Message.getUnreadCount.R }
/**
 * 查询未读站内信条数
 *
 *
 * **TAG:** 站内信服务； &nbsp;&nbsp; **PATH:** /1.0/message/get_unread_count；
 */
export const getUnreadCount = api<getUnreadCount.R>(s + 'getUnreadCount', {path: '/1.0/message/get_unread_count'})
//#endregion getUnreadCount--base
//#region getUnreadCount--mock auto
if (__DEV__) {
  getUnreadCount.mock('自动生成', () => {
    return {}
  })
}
//#endregion getUnreadCount--mock

