import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "ant-design-vue";

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number) => {
  let msg = "";
  switch (status) {
    case 400:
      msg = "请求错误(400)";
      break;
    case 401:
      msg = "未授权，请重新登录(401)";
      break;
    case 403:
      msg = "拒绝访问(403)";
      break;
    case 404:
      msg = "请求出错(404)";
      break;
    case 408:
      msg = "请求超时(408)";
      break;
    case 500:
      msg = "服务器错误(500)";
      break;
    case 501:
      msg = "服务未实现(501)";
      break;
    case 502:
      msg = "网络错误(502)";
      break;
    case 503:
      msg = "服务不可用(503)";
      break;
    case 504:
      msg = "网络超时(504)";
      break;
    case 505:
      msg = "HTTP版本不受支持(505)";
      break;
    default:
      msg = `连接出错(${status})!`;
  }
  return `${msg}，请检查网络或联系管理员！`;
};

// 创建axios实例
const instance = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API,
});
// 设置post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8";
instance.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token"); // 服务端拿的 token 可以从 vuex、localStorage 等地方取
    config.headers["token"] = token;
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

// 相应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
