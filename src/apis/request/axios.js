import axios from 'axios';
import rap from './rap.js';

class HttpRequest {
  constructor(baseUrl, rapConfig) {
    this.baseUrl = baseUrl;
    this.rapConfig = rapConfig;
  }
  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 30000, // 请求超时时间
      headers: {
        'Content-Type': 'application/json'
      }
      // transformRequest: [data => JSON.stringify(data)] // 参数转换

      // transformRequest: [data => JSON.stringify({ data })] // 参数转换
    };
  }

  interceptors(instance, url) {
    // 在开发环境使用rap
    if (process.env.NODE_ENV === 'development') {   
      // 初始化rap数据
      rap.initConfig(this.rapConfig);
      // RAP拦截处理
      instance.interceptors.request.use(config => rap.onPreprocessed(config), rap.onRejected);
    }
    // request拦截器
    instance.interceptors.request.use(config => {
      const token = 'xxx'; 
      if (token) {
        config.headers.common['token'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config;
    }, error => {
      console.log('request interceptors', error); 
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
      const { data, status } = res;
      if (status !== 200 || data.code !== 200) {
        return Promise.reject(data);
      }
      return data;
    }, error => {
      console.error('interceptors', error);
      if (error.message === 'Network Error') {
        return Promise.reject({ message: '数据更新中，请稍后查看' });
      }
      return Promise.reject(error);
    });
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
