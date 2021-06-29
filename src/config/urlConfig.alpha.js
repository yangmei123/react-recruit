/**
 * @authors lml 
 * @date    2021-03-10
 * @object
 * @desc  设置页面对应的请求接口等基础设置
 * @param {string} frontHost - 项目前端页面访问地址
 * @param {string} apiHost - 项目接口请求地址
 * @param {string} appId - 项目对应的公众号的appId
 * @param {string} redirectUrl - 公众号授权回调地址，网页授权域名
 * @param {string} stateUrl - 授权回调地址上所带的参数，用于服务端根据参数配置跳转到对应的域名并带上code
 * @param {string} remoteUrl - 七牛远程文件域名
 */
const __urlConfig = {
  // 开发环境
  frontHost: 'http://starmoly.cccwei.com/advertise',
  apiHost: '',
  appId: '',
  redirectUrl: 'https://wxoauth.cccwei.com', 
  stateUrl: 'http,192.168.44.34:8008,index,scope,snsapi_userinfo',
  remoteUrl: 'http://img.starmoly.cccwei.com/advertise',
  collectUserInfoApiHost: 'https://api-h5.starmoly.cccwei.com/',
  // rap拦截设置
  rap: {
    rapURL: 'http://rap2.feibo.cc:38080/app/mock/49/',
    rapMode: 3, // rapMode：0 - 不拦截；   1 - 拦截全部；   2 - 黑名单中的项不拦截；   3 - 仅拦截白名单中的项
    rapWhiteList: [
      'recruit'
    ],
    rapBlackList: [],
    rapFilterHeaders: ['token'],
    rapFilterMethods: []
  }
};

module.exports = __urlConfig;

