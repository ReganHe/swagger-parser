// tslint:disable
import {api} from './base'

export namespace GwsToken {
  export namespace preLogin {
    export interface Options {
      loginName?: string
      password?: string
      captcha?: string
      bindKey?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace exchangeRefreshToken {
    export interface Options {
      applicationId?: number
      shortTermToken?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsAccount {
  export namespace accountLogin4Frontend {
    export interface Options {
      applicationId?: number
      deviceId?: number
      loginName?: string
      wxUserId?: string
      password?: string
      captcha?: string
      bindKey?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace exchangeAccessToken {
    export interface Options {
      refreshToken?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace accountLogin4Direct {
    export interface Options {
      applicationId?: number
      deviceId?: number
      loginName?: string
      wxUserId?: string
      password?: string
      captcha?: string
      bindKey?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace captcha {
    export interface Options {
      type: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace accountLogout {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsUserInfo {
  export namespace modifyPassword {
    export interface Options {
      originalPassword?: string
      newPassword?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace resetPassword {
    export interface Options {
      id?: number
      resetPassword?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getCurrentLoginUserInfo {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsApplication {
  export namespace addApplication {
    export type OptionsPropUserIds = number[]
    export type OptionsPropDeviceIds = number[]
    /** 新增应用的信息 */
    export interface Options {
      name?: string
      code?: string
      type?: string
      description?: string
      status?: string
      userIds?: OptionsPropUserIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findApplicationsPaged {
    export interface Options {
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneApplication {
    export interface Options {
      /** 应用编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findPlatformAdmins {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findUserCenterApplication {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyApplication {
    export type OptionsPropUserIds = number[]
    export type OptionsPropDeviceIds = number[]
    /** 应用信息 */
    export interface Options {
      id?: number
      name?: string
      code?: string
      type?: string
      description?: string
      status?: string
      userIds?: OptionsPropUserIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeApplication {
    export interface Options {
      /** 应用编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsMenu {
  export namespace addMenu {
    export interface Options {
      deviceId?: number
      name?: string
      parentId?: number
      url?: string
      type?: string
      icon?: string
      orderNo?: number
      visible?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findStaticMenu1 {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyMenu {
    export interface Options {
      id?: number
      deviceId?: number
      name?: string
      parentId?: number
      url?: string
      type?: string
      icon?: string
      orderNo?: number
      visible?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeMenu {
    export interface Options {
      /** 菜单编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsPermission {
  export namespace addPerm {
    export interface Options {
      menuId?: number
      deviceId?: number
      name?: string
      perms?: string
      orderNo?: number
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findPermsPaged {
    export interface Options {
      menuId?: number
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOnePerm {
    export interface Options {
      /** 功能点编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findStaticMenu2 {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyPerm {
    export interface Options {
      id?: number
      deviceId?: number
      name?: string
      perms?: string
      orderNo?: number
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removePerm {
    export interface Options {
      /** 功能点编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsRole {
  export namespace saveRoleRefsMenuPermApi {
    export type OptionsPropMenuIds = number[]
    export type OptionsPropPermIds = number[]
    export type OptionsPropApiIds = number[]
    export interface Options {
      roleId?: number
      menuIds?: OptionsPropMenuIds
      permIds?: OptionsPropPermIds
      apiIds?: OptionsPropApiIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace addRole {
    export interface Options {
      name?: string
      code?: string
      type?: string
      description?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findAllApisPaged {
    export interface Options {
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findAllRoleRefsMenuPermApi {
    export interface Options {
      /** 角色编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findStaticMenu {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findRolesPaged {
    export interface Options {
      name?: string
      code?: string
      type?: string
      status?: string
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneRole {
    export interface Options {
      /** 角色编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyRole {
    export interface Options {
      id?: number
      name?: string
      code?: string
      type?: string
      description?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeRole {
    export interface Options {
      /** 角色编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsApi {
  export namespace addApi {
    export interface Options {
      deviceId?: number
      name?: string
      url?: string
      description?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findApisPaged {
    export interface Options {
      deviceId?: number
      name?: string
      status?: string
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneApi {
    export interface Options {
      /** 数据接口编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyApi {
    export interface Options {
      id?: number
      deviceId?: number
      name?: string
      url?: string
      description?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeApi {
    export interface Options {
      /** 数据接口编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsPlatformAdmin {
  export namespace addUser3 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneUser3 {
    export interface Options {
      /** 平台管理员编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findUsersPaged1 {
    export interface Options {
      loginName?: string
      userName?: string
      status?: string
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyUser3 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      id?: number
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeUser2 {
    export interface Options {
      /** 平台管理员编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsApplicationAdmin {
  export namespace addUser2 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneUser2 {
    export interface Options {
      /** 应用管理员编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findUsersPaged {
    export interface Options {
      loginName?: string
      userName?: string
      status?: string
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyUser2 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      id?: number
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeUser1 {
    export interface Options {
      /** 应用管理员编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsRefApp {
  export namespace addRefApplication {
    /** 应用管理员编号集合 */
    export type OptionsPropRawBody = number[]
    export interface Options {
      __rawBody: OptionsPropRawBody
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findRefApplicationsPaged {
    export interface Options {
      loginName?: string
      userName?: string
      /** 页码 */
      page_num: number
      /** 每页记录数 */
      page_size: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeRefApplication {
    export interface Options {
      /** 应用管理员编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsDevice {
  export namespace addDevice {
    /** 常规设备新增请求 */
    export interface Options {
      /** 设备名称 */
      name: string
      /** 所属站点 */
      stationId: number
      /** 规格型号 */
      specification?: string
      /** 生产厂家 */
      manufacturer?: number
      /** 启用日期 */
      usingDate?: string
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure?: number
      /** 实际数量 */
      actualQuantity?: number
      /** 安装位置 */
      installationPosition?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findAllDevices {
    export interface Options {
      /** 状态 0 有效 1 无效 null 所有 */
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneDevice {
    export interface Options {
      /** 设备编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyDevice {
    export interface Options {
      id?: number
      name?: string
      type?: string
      status?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeDevice {
    export interface Options {
      /** 设备编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace GwsUser {
  export namespace addUser {
    export type OptionsPropUserExtRefsListSubItemPropRoleIds = number[]
    export type OptionsPropUserExtRefsListSubItemPropDeviceIds = number[]
    export interface OptionsPropUserExtRefsListSubItem {
      applicationId?: number
      roleIds?: OptionsPropUserExtRefsListSubItemPropRoleIds
      deviceIds?: OptionsPropUserExtRefsListSubItemPropDeviceIds
    }
    export type OptionsPropUserExtRefsList = OptionsPropUserExtRefsListSubItem[]
    export interface Options {
      loginName?: string
      userName?: string
      password?: string
      status?: string
      userExtRefsList?: OptionsPropUserExtRefsList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace addUser1 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneUser {
    export interface Options {
      id: number
      applicationIds: any[]
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace findOneUser1 {
    export interface Options {
      /** 应用用户编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyUser {
    export type OptionsPropUserExtRefsListSubItemPropRoleIds = number[]
    export type OptionsPropUserExtRefsListSubItemPropDeviceIds = number[]
    export interface OptionsPropUserExtRefsListSubItem {
      applicationId?: number
      roleIds?: OptionsPropUserExtRefsListSubItemPropRoleIds
      deviceIds?: OptionsPropUserExtRefsListSubItemPropDeviceIds
    }
    export type OptionsPropUserExtRefsList = OptionsPropUserExtRefsListSubItem[]
    export interface Options {
      id?: number
      loginName?: string
      userName?: string
      password?: string
      status?: string
      userExtRefsList?: OptionsPropUserExtRefsList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyUser1 {
    export type OptionsPropRoleIds = number[]
    export type OptionsPropDeviceIds = number[]
    export interface Options {
      id?: number
      loginName?: string
      userName?: string
      password?: string
      status?: string
      roleIds?: OptionsPropRoleIds
      deviceIds?: OptionsPropDeviceIds
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeUser {
    export interface Options {
      /** 应用用户编号 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Sp {
  export namespace getByYear {
    export interface Options {
      year: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeStation {
    /** 安全检测站点删除请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 删除的站点名称 */
      removeStation: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace persist {
    /** 站点集合 */
    export type OptionsPropStationList = string[]
    /** 安全检测计划持久化请求 */
    export interface Options {
      /** 年份 */
      planYear: string
      /** 安全检测计划id */
      planId: number
      /** 安全检测计划月id */
      planMonthId: number
      /** 站点集合 */
      stationList: OptionsPropStationList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Spf {
  export namespace add2 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 安全监测计划文件添加请求 */
    export interface Options {
      /** 安全检测计划字典表id */
      planId: number
      /** 站点id */
      stationId: number
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged2 {
    export interface Options {
      /** 安全检测计划字典表id：对应字典表中的主键 */
      planId?: number
      /** 站点id */
      stationId?: number
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne2 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit2 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 安全监测计划文件编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 安全检测计划字典表id */
      planId?: number
      /** 站点id */
      stationId?: number
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove1 {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Sc {
  export namespace getDayOne {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace initDayInspectData {
    export interface Options {
      stationId?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getDayPaged {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 检查单编号 */
      orderNo?: string
      /** 状态 1-检查中 2-检查完成 */
      status?: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate?: string
      /** 检查开始日期 */
      checkStartDate?: string
      /** 检查结束日期 */
      checkEndDate?: string
      /** 提交开始日期 */
      submitStartDate?: string
      /** 提交结束日期 */
      submitEndDate?: string
      /** 类型 1-日 2-月 */
      type?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getMonthOne {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace initMonthInspectData {
    export interface Options {
      stationId?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getMonthPaged {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 检查单编号 */
      orderNo?: string
      /** 状态 1-检查中 2-检查完成 */
      status?: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate?: string
      /** 检查开始日期 */
      checkStartDate?: string
      /** 检查结束日期 */
      checkEndDate?: string
      /** 提交开始日期 */
      submitStartDate?: string
      /** 提交结束日期 */
      submitEndDate?: string
      /** 类型 1-日 2-月 */
      type?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace dayPersist {
    /** 储罐巡检内容 */
    export interface OptionsPropPvContentListSubItem {
      /** 主键 */
      id?: number
      /** 压力容器id */
      pvId?: number
      /** 巡检时间 */
      time?: string
      /** 压力（Mpa） */
      pressure?: string
      /** 饱和（Mpa） */
      saturated?: string
      /** 液位（mmH2O） */
      liquidLevel?: string
      /** 对应重量（Kg） */
      weight?: string
      /** 泵池温度（摄氏度） */
      temperature?: string
      /** 安检情况 0-正常 1-撬内是否有泄漏 2-空压机是否正常 3-是否有外来可疑人员 4-是否有外来可疑物品 */
      result?: number
    }
    /** 储罐巡检列表 */
    export type OptionsPropPvContentList = OptionsPropPvContentListSubItem[]
    /** 巡检结果 0：未选 1：勾 -1：叉 */
    export type OptionsPropContentListSubItemPropResults = number[]
    /** 巡检内容 */
    export interface OptionsPropContentListSubItem {
      /** id */
      id?: number
      /** 巡检内容id（对应字典id） */
      contentId?: number
      /** 巡检内容 */
      content?: string
      /** 巡检结果 0：未选 1：勾 -1：叉 */
      results?: OptionsPropContentListSubItemPropResults
      /** 巡检次数 */
      times?: number
    }
    /** 巡检内容列表 */
    export type OptionsPropContentList = OptionsPropContentListSubItem[]
    /** 持久化检查单（日）请求 */
    export interface Options {
      /** 检查单id */
      id?: number
      /** 站点id */
      stationId: number
      /** 巡检人 */
      inspector?: string
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups?: number
      /** 状态 1-检查中 2-检查完成 */
      status: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate: string
      /** 储罐巡检列表 */
      pvContentList?: OptionsPropPvContentList
      /** 巡检内容列表 */
      contentList: OptionsPropContentList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace monthPersist {
    /** 巡检内容（月） */
    export interface OptionsPropMonthListSubItem {
      /** id */
      id?: number
      /** 巡检内容id（对应字典id） */
      operationId?: number
      /** 巡检内容 */
      operation?: string
      /** 异常内容 */
      content?: string
      /** 检查日期 */
      inspectDate?: string
      /** 巡检结果 1：正常 2：异常 */
      result?: number
    }
    /** 巡检内容列表 */
    export type OptionsPropMonthList = OptionsPropMonthListSubItem[]
    /** 持久化检查单（月）请求 */
    export interface Options {
      /** 检查单id */
      id?: number
      /** 站点id */
      stationId: number
      /** 巡检人 */
      inspector?: string
      /** 状态 1-检查中 2-检查完成 */
      status: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate: string
      /** 巡检内容列表 */
      monthList: OptionsPropMonthList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace monthRemove {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace dayRemove {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Device {
  export namespace add5 {
    /** 常规设备新增请求 */
    export interface Options {
      /** 设备名称 */
      name: string
      /** 所属站点 */
      stationId: number
      /** 规格型号 */
      specification?: string
      /** 生产厂家 */
      manufacturer?: number
      /** 启用日期 */
      usingDate?: string
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure?: number
      /** 实际数量 */
      actualQuantity?: number
      /** 安装位置 */
      installationPosition?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged5 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 设备名称 */
      name?: string
      /** 生产厂家 */
      manufacturer?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne4 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit5 {
    /** 编辑设备编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 设备名称 */
      name?: string
      /** 所属站点 */
      stationId?: number
      /** 规格型号 */
      specification?: string
      /** 生产厂家 */
      manufacturer?: number
      /** 启用日期 */
      usingDate?: string
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure?: number
      /** 实际数量 */
      actualQuantity?: number
      /** 安装位置 */
      installationPosition?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove2 {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Gsb {
  export namespace add8 {
    /** 常规物资台帐新增请求 */
    export interface Options {
      /** 物资名称 */
      name: string
      /** 接收人 */
      receiver: string
      /** 站点id */
      stationId?: number
      /** 接收时间 */
      receiveDate: string
      /** 数量 */
      quantity?: number
      /** 单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      quantityUnit?: number
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged9 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 物资名称 */
      name?: string
      /** 开始报修日期 */
      beginDate?: string
      /** 结束报修日期 */
      endDate?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove5 {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Mu {
  export namespace getByCondition {
    export interface Options {
      /** 厂家/单位名称 */
      name?: string
      /** 类型 1-生产厂家 2-检验单位 3-维护保养单位 4-设计单位 5-安装单位 */
      type?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Img {
  export namespace getUploadFile {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Attachment {
  export namespace addAttachment {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 文件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 批量添加附件请求 */
    export interface Options {
      /** 文件列表 */
      fileList: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace uploadFile {
    export interface Options {
      uploadFile?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getAttachmentById {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getSafeAttachmentPaged {
    export interface Options {
      /** 文件名（模糊查询） */
      fileName?: string
      /** 关联主键（站点id/用户id） */
      relationKey?: number
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number
      /** 类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 */
      type?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getStationAttachments {
    export interface Options {
      /** 文件名（模糊查询） */
      fileName?: string
      /** 关联主键（站点id/用户id） */
      relationKey?: number
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number
      /** 类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 */
      type?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace downloadAttachment {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace downloadTag {
    export interface Options {
      /** 业务主键 */
      relationKey: number
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace editAttachment {
    /** 附件信息修改请求 */
    export interface Options {
      /** 文件id */
      id: number
      /** 文件名 */
      fileName?: string
      /** 上传url */
      url?: string
      /** 类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 */
      type?: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeAttachment {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Org {
  export namespace getStationList {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace addWorker {
    /** 新增工作人员基本信息请求 */
    export interface Options {
      /** 所属机构id */
      orgId: number
      /** 工号 */
      workerNum: string
      /** 姓名 */
      name: string
      /** 身份证号 */
      identityNum?: string
      /** 手机号 */
      mobile?: string
      /** 岗位 */
      jobType?: string
      /** 班别 */
      groups?: number
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOrgInfoPaged {
    export interface Options {
      /** 查询关键字 */
      queryKey?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOrgInfoOne {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getWorkerOne {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOrgWorkers {
    export interface Options {
      /** 站点id */
      orgId?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getWorkersList {
    export interface Options {
      /** 站点id */
      orgId?: number
      /** 姓名 */
      name?: string
      /** 岗位list */
      jobTypeList?: any[]
      /** 班别 */
      groups?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getWorkerAttachmentList {
    export interface Options {
      /** 员工id */
      workerId: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyWorkerAttachmentBatch {
    /** 员工资质文件信息 */
    export interface OptionsPropWorkerAttachmentListSubItem {
      /** 文件id */
      id?: number
      /** 文件名 */
      fileName?: string
      /** 上传url */
      url?: string
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 人员证书种类 */
      certificateType?: string
      /** 证书编号 */
      certificateNo?: string
      /** 人员证书发证单位 */
      issuingUnit?: string
      /** 证件有效期 */
      periodOfValidity?: string
      /** 备注 */
      remark?: string
    }
    /** 文件列表 */
    export type OptionsPropWorkerAttachmentList = OptionsPropWorkerAttachmentListSubItem[]
    /** 批量提交员工资质文件请求 */
    export interface Options {
      /** 员工id */
      workerId: number
      /** 文件列表 */
      WorkerAttachmentList: OptionsPropWorkerAttachmentList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyOrg {
    /** 联系方式List */
    export type OptionsPropPhoneNum = string[]
    /** 修改站点基本信息请求 */
    export interface Options {
      /** 机构id */
      orgId: number
      /** 机构面积 */
      orgArea?: string
      /** 地址 */
      address?: string
      /** 联系方式List */
      phoneNum?: OptionsPropPhoneNum
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyWorker {
    /** 修改工作人员基本信息请求 */
    export interface Options {
      /** 员工id */
      id: number
      /** 工号 */
      workerNum?: string
      /** 姓名 */
      name?: string
      /** 身份证号 */
      identityNum?: string
      /** 手机号 */
      mobile?: string
      /** 岗位 */
      jobType?: string
      /** 班别 */
      groups?: number
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeWorker {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeWorkerAttachment {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Operation {
  export namespace getOperationLogPaged {
    export interface Options {
      /** 操作人 */
      userId?: number
      /** 开始时间 */
      beginTime?: string
      /** 结束时间 */
      endTime?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Sec {
  export namespace initData {
    export interface Options {
      stationId?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged6 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 检查单编号 */
      orderNo?: string
      /** 状态 1-检查中 2-检查完成 */
      status?: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate?: string
      /** 检查开始日期 */
      checkStartDate?: string
      /** 检查结束日期 */
      checkEndDate?: string
      /** 提交开始日期 */
      submitStartDate?: string
      /** 提交结束日期 */
      submitEndDate?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne5 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace persist1 {
    /** 特种设备检查内容 */
    export interface OptionsPropContentListSubItem {
      /** id */
      id?: number
      /** 设备状况字典表id：对应字典表中的主键 */
      conditionId?: number
      /** 设备状况描述 */
      conditionDesc?: string
      /** 异常内容 */
      content?: string
      /** 巡检结果 1：正常 2：异常 */
      result?: number
    }
    /** 检查内容列表 */
    export type OptionsPropContentList = OptionsPropContentListSubItem[]
    /** 持久化特种设备检查单请求 */
    export interface Options {
      /** 检查单id */
      id?: number
      /** 特种设备id（压力容器id） */
      equipId?: number
      /** 站点id */
      stationId: number
      /** 巡检人 */
      inspector?: string
      /** 状态 1-检查中 2-检查完成 */
      status: number
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number
      /** 检查日期/年月 */
      checkDate: string
      /** 异常情况 */
      abnormalContent?: string
      /** 检查内容列表 */
      contentList: OptionsPropContentList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove3 {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Wo {
  export namespace add1 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 维修报告添加请求 */
    export interface Options {
      /** 报修内容 */
      contents: string
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number
      /** 报修结论内容 */
      conclusionContent?: string
      /** 实际检修内容与更换配件清单 */
      detailedList?: string
      /** 维修性质 1-上门维修 2-急抢修 */
      nature?: number
      /** 报修人 */
      repairApplicant?: string
      /** 所属站点id */
      stationId: number
      /** 站点负责人（联系人姓名中文） */
      contacts?: string
      /** 站点联系方式 */
      phone?: string
      /** 报修日期 */
      repairDate?: string
      /** 检查单id（关联派发维修工单的检查单） */
      checkId?: number
      /** 检查单类型 1-安全检查单 2-特种设备检查单 */
      checkType?: number
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged1 {
    export interface Options {
      /** 设备名称 */
      stationId?: number
      /** 工单编号 */
      orderNo?: string
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status?: number
      /** 维修性质 1-上门维修 2-急抢修 */
      nature?: number
      /** 开始报修日期 */
      beginDate?: string
      /** 结束报修日期 */
      endDate?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne1 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit1 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 维修报告编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number
      /** 报修结论内容 */
      conclusionContent?: string
      /** 实际检修内容与更换配件清单 */
      detailedList?: string
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status?: number
      /** 确认人 */
      confirmedBy?: string
      /** 驳回原因 */
      rejectReason?: string
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Pip {
  export namespace add3 {
    /** 压力管道新增请求 */
    export interface Options {
      /** 管道名称 */
      name: string
      /** 所属站点id */
      stationId: number
      /** 管道编号 */
      code: string
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level?: number
      /** 设计单位id */
      designUnit?: number
      /** 安装单位id */
      installationUnit?: number
      /** 安装年月/年月日 */
      installDate?: string
      /** 投用年月/年月日 */
      useDate?: string
      /** 公称直径（mm) */
      nominalDiameter?: string
      /** 公称壁厚（mm) */
      nominalWallThickness?: string
      /** 管道长度（m) */
      pipeLength?: string
      /** 压力（Mpa） */
      pressure?: string
      /** 温度（℃） */
      temperature?: string
      /** 介质 1-天然气 2-液化天然气 */
      medium?: number
      /** 检验结论 1-合格 2-不合格 */
      conclusion?: number
      /** 检验单位id */
      inspectionUnit?: number
      /** 次检验日期：年月/年月日 */
      nextInspectionDate?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged3 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 管道编号 */
      code?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPipeLengthSum {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne3 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace discard1 {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit3 {
    /** 压力管道编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 所属站点id */
      stationId?: number
      /** 管道名称 */
      name?: string
      /** 管道编号 */
      code?: string
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level?: number
      /** 设计单位id */
      designUnit?: number
      /** 安装单位id */
      installationUnit?: number
      /** 安装年月/年月日 */
      installDate?: string
      /** 投用年月/年月日 */
      useDate?: string
      /** 公称直径（mm) */
      nominalDiameter?: string
      /** 公称壁厚（mm) */
      nominalWallThickness?: string
      /** 管道长度（m) */
      pipeLength?: string
      /** 压力（Mpa） */
      pressure?: string
      /** 温度（℃） */
      temperature?: string
      /** 介质 1-天然气 2-液化天然气 */
      medium?: number
      /** 检验结论 1-合格 2-不合格 */
      conclusion?: number
      /** 检验单位id */
      inspectionUnit?: number
      /** 次检验日期：年月/年月日 */
      nextInspectionDate?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Pv {
  export namespace add {
    /** 常规设备新增请求 */
    export interface Options {
      /** 设备名称 */
      name: string
      /** 设备简称 */
      shortName?: string
      /** 设备编号 */
      code: string
      /** 类型 1-槽罐 2-泵组 */
      type: number
      /** 使用证编号 */
      licenseNo?: string
      /** 注册码 */
      regCode?: string
      /** 生产厂家id */
      manufacturer?: number
      /** 设计压力（Mpa） */
      designPressure?: string
      /** 检验周期 */
      inspectionCycle?: number
      /** 投运日期 */
      operationDate?: string
      /** 本次校验日期 */
      thisTimeCheckDate?: string
      /** 下次年验日期 */
      nextAnnualInspectionDate?: string
      /** 下次全验日期 */
      nextCompleteInspectionDate?: string
      /** 安装位置 */
      installationPosition?: string
      /** 所属站点 */
      stationId?: number
      /** 检验单位id */
      inspectionUnit?: number
      /** 维护保养单位id */
      maintenanceUnit?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 设备名称 */
      name?: string
      /** 生产厂家 */
      manufacturer?: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getByStation {
    export interface Options {
      stationId?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace discard {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit {
    /** 常规设备编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 设备名称 */
      name?: string
      /** 设备简称 */
      shortName?: string
      /** 设备编号 */
      code?: string
      /** 使用证编号 */
      licenseNo?: string
      /** 注册码 */
      regCode?: string
      /** 生产厂家id */
      manufacturer?: number
      /** 设计压力（Mpa） */
      designPressure?: string
      /** 检验周期 */
      inspectionCycle?: number
      /** 投运日期 */
      operationDate?: string
      /** 本次校验日期 */
      thisTimeCheckDate?: string
      /** 下次年验日期 */
      nextAnnualInspectionDate?: string
      /** 下次全验日期 */
      nextCompleteInspectionDate?: string
      /** 安装位置 */
      installationPosition?: string
      /** 所属站点 */
      stationId?: number
      /** 检验单位id */
      inspectionUnit?: number
      /** 维护保养单位id */
      maintenanceUnit?: number
      /** 类型 1-槽罐 2-泵组 */
      type?: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace User {
  export namespace getUserOne {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getUserByUserId {
    export interface Options {
      userId: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Gas {
  export namespace getGasPaged {
    export interface Options {
      /** 所属站点id */
      stationId?: number
      /** 开始时间 */
      beginTime?: string
      /** 结束时间 */
      endTime?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Message {
  export namespace messageRead {
    /** 站内信已读请求 */
    export interface Options {
      /** 站内信id */
      msgId: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged4 {
    export interface Options {
      /** 状态 1-已读 2-未读 */
      status?: number
      /** 站点id */
      stationId?: number
      /** 开始时间 */
      beginTime?: string
      /** 结束时间 */
      endTime?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getUnreadCount {
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Mro {
  export namespace add6 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 中修工单添加请求 */
    export interface Options {
      /** 维修内容 */
      contents: string
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number
      /** 报修结论内容 */
      conclusionContent?: string
      /** 实际检修内容与更换配件清单 */
      detailedList?: string
      /** 维修性质 */
      nature?: string
      /** 所属站点id */
      stationId?: number
      /** 站点负责人 */
      contacts?: string
      /** 站点联系方式 */
      phone?: string
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged7 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 工单编号 */
      orderNo?: string
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status?: number
      /** 开始维修日期 */
      beginDate?: string
      /** 结束维修日期 */
      endDate?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne6 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit6 {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number
      /** 文件名 */
      fileName: string
      /** 上传url */
      url: string
      /** 附件类型：0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件 5-中修工单附件 */
      type: number
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 异常信息 */
      errorMsg?: string
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[]
    /** 中修工单编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 维修内容 */
      contents?: string
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number
      /** 报修结论内容 */
      conclusionContent?: string
      /** 实际检修内容与更换配件清单 */
      detailedList?: string
      /** 维修性质 */
      nature?: string
      /** 所属站点id */
      stationId?: number
      /** 站点负责人 */
      contacts?: string
      /** 站点联系方式 */
      phone?: string
      /** 维修日期（工单完成后回填） */
      repairDate?: string
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status?: number
      /** 附件列表 */
      fileList?: OptionsPropFileList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace remove4 {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Mrp {
  export namespace add7 {
    /** 维修报告查询请求 */
    export interface OptionsPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string
      /** 中修日期 */
      repairDate: string
    }
    /** 派单/中修日期列表 */
    export type OptionsPropTimeList = OptionsPropTimeListSubItem[]
    /** 中修计划新增请求 */
    export interface Options {
      /** 所属站点id */
      stationId: number
      /** 维修内容 */
      contents?: string
      /** 维修性质 */
      nature?: string
      /** 计划生效开始时间 */
      planStartDate: string
      /** 计划生效结束时间 */
      planEndDate: string
      /** 初始中修日期 */
      repairDate: string
      /** 中修周期（单位月） */
      cycle?: number
      /** 中修检查前N天 */
      daysAhead?: number
      /** 备注 */
      remark?: string
      /** 派单/中修日期列表 */
      timeList: OptionsPropTimeList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getPaged8 {
    export interface Options {
      /** 站点id */
      stationId?: number
      /** 状态 1-待执行 2-执行中 3-已完成 4-已终止 */
      status?: number
      /** 下次中修日期开始日期 */
      nextRepairStartDate?: string
      /** 下次中修日期结束日期 */
      nextRepairEndDate?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getOne7 {
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace stop {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit7 {
    /** 维修报告查询请求 */
    export interface OptionsPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string
      /** 中修日期 */
      repairDate: string
    }
    /** 派单/中修日期列表 */
    export type OptionsPropTimeList = OptionsPropTimeListSubItem[]
    /** 中修计划编辑请求 */
    export interface Options {
      /** 主键 */
      id: number
      /** 中修检查前N天 */
      daysAhead?: number
      /** 备注 */
      remark?: string
      /** 派单/中修日期列表 */
      timeList?: OptionsPropTimeList
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Certificate {
  export namespace add4 {
    /** 员工资质文件信息 */
    export interface Options {
      /** 文件id */
      id?: number
      /** 文件名 */
      fileName?: string
      /** 上传url */
      url?: string
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 人员证书种类 */
      certificateType?: string
      /** 证书编号 */
      certificateNo?: string
      /** 人员证书发证单位 */
      issuingUnit?: string
      /** 证件有效期 */
      periodOfValidity?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getInfoPaged {
    export interface Options {
      /** 模糊匹配 姓名、证件编号 */
      queryKey?: string
      /** 所属机构id */
      orgId?: number
      /** 证书类型 */
      certificateType?: string
      /** 证书状态 */
      fileStatusList?: any[]
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getInfoOne {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace edit4 {
    /** 员工资质文件信息 */
    export interface Options {
      /** 文件id */
      id?: number
      /** 文件名 */
      fileName?: string
      /** 上传url */
      url?: string
      /** 关联主键 站点id 或 用户id */
      relationKey?: number
      /** 生效时间 */
      effectiveDay?: string
      /** 到期时间 */
      expiryDay?: string
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number
      /** 人员证书种类 */
      certificateType?: string
      /** 证书编号 */
      certificateNo?: string
      /** 人员证书发证单位 */
      issuingUnit?: string
      /** 证件有效期 */
      periodOfValidity?: string
      /** 备注 */
      remark?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
export namespace Dict {
  export namespace addType {
    /** 字典类型请求 */
    export interface Options {
      /** 数据字典类型id */
      id?: number
      /** 字典编码 */
      typeKey: string
      /** 字典类型值 */
      typeValue?: string
      /** 字典类型描述 */
      typeDesc?: string
      /** 字典类型状态 0-启用 1-禁用 */
      status?: string
      /** 创建人 */
      createdBy?: string
      /** 更新人 */
      updatedBy?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace addValue {
    /** 字典值请求 */
    export interface Options {
      /** 字典id */
      id?: number
      /** 字典类型id */
      typeId: number
      /** 子项编码 */
      dicCode: string
      /** 子项字典名称 */
      dicValue?: string
      /** 字典描述 */
      dicDesc?: string
      /** 状态 0-启用 1-禁用 */
      status?: string
      /** 创建人 */
      createdBy?: string
      /** 更新人 */
      updatedBy?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getTypes {
    export interface Options {
      typeKey?: string
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getValues {
    export interface Options {
      typeId: number
      pageNum: number
      pageSize: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getValuesByKey {
    export interface Options {
      typeKey: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace getValuesByKeys {
    export interface Options {
      typeKeyList: any[]
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyType {
    /** 字典类型请求 */
    export interface Options {
      /** 数据字典类型id */
      id?: number
      /** 字典编码 */
      typeKey: string
      /** 字典类型值 */
      typeValue?: string
      /** 字典类型描述 */
      typeDesc?: string
      /** 字典类型状态 0-启用 1-禁用 */
      status?: string
      /** 创建人 */
      createdBy?: string
      /** 更新人 */
      updatedBy?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace modifyValue {
    /** 字典值请求 */
    export interface Options {
      /** 字典id */
      id?: number
      /** 字典类型id */
      typeId: number
      /** 子项编码 */
      dicCode: string
      /** 子项字典名称 */
      dicValue?: string
      /** 字典描述 */
      dicDesc?: string
      /** 状态 0-启用 1-禁用 */
      status?: string
      /** 创建人 */
      createdBy?: string
      /** 更新人 */
      updatedBy?: string
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeType {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
  export namespace removeValue {
    export interface Options {
      id: number
    }
    export interface O extends api.FilterRequest<Options> {}
    export type Returns = any
    export type R = api.FilterResponse<Returns>
  }
}
