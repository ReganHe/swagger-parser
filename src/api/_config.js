module.exports = [
  {
    name: 'whSmartSite',
    type: 'fe',
    language: 'ts',
    outputDir: './auto',
    json: 'http://scsp.app.polarwin.cc:9080/v3/api-docs',
    showUpdateLog: true,
    tagNameMap: (name) => {
      const TAG_MAP = {
        '01.账号预登录服务': 'GwsToken',
        '02.账号服务': 'GwsAccount',
        '03.个人信息': 'GwsUserInfo',
        '04.应用管理服务': 'GwsApplication',
        '05.菜单管理服务': 'GwsMenu',
        '06.功能点管理服务': 'GwsPermission',
        '07.角色管理服务': 'GwsRole',
        '08.数据接口管理服务': 'GwsApi',
        '09.平台管理员管理服务': 'GwsPlatformAdmin',
        '10.应用管理员管理服务': 'GwsApplicationAdmin',
        '11.应用与应用管理员关联配置服务': 'GwsRefApp',
        '12.设备管理服务': 'GwsDevice',
        '12.应用用户管理服务': 'GwsUser',
        报警服务: 'Alarm',
        地钉设备服务: 'Gnail',
        附件服务: 'Attachment',
        截图管理服务: 'Screenshot',
        区域服务: 'Region',
        摄像机设备服务: 'Camera',
        设备上报数据处理服务: 'Collector',
        项目服务: 'Project',
        用户管理服务: 'User',
      };
      return TAG_MAP[name];
    },
    API_MAP: function (apiName) {
      return apiName;
    },
  },
  // {
  //   "outputDir": "src/api/common",
  //   "json": "http://192.168.38.195:9516/rest/swagger.json",
  //   "TAG_MAP": {
  //     "图形验证码服务": "captcha",
  //     "登陆注册服务": "login"
  //   },
  //   "API_MAP": function(apiName) {
  //     return apiName
  //   }
  // },
];