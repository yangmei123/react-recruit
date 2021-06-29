/**
 * @authors lml 
 * @date    2021-06-10
 * @object
 * @desc  设置页面对应的请求接口等基础设置
 * @param {string} frontHost - 项目前端页面访问地址
 * @param {string} apiHost - 项目接口请求地址
 * @param {string} appId - 项目对应的公众号的appId
 * @param {string} remoteUrl - 七牛远程文件域名
 */
 const __urlConfig = {
  // 正式环境
  frontHost: 'http://xxx.xxx.com',
  apiHost: '',
  appId: '',
  redirectUrl: 'http://xxx.xxx.com',
  // rap拦截设置
  rap: {
    rapURL: 'http://rap2.feibo.cc:38080/app/mock/51/',
    rapMode: 3, // rapMode：0 - 不拦截；   1 - 拦截全部；   2 - 黑名单中的项不拦截；   3 - 仅拦截白名单中的项
    rapWhiteList: [
      'recruit/list'
    ],
    rapBlackList: [],
    rapFilterHeaders: ['token'],
    rapFilterMethods: []
  }
};

module.exports = __urlConfig;

