import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
import qs from 'qs';
import { Toast } from 'vant';
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    showLoading?: boolean;
    cancel: Function;
}
declare module 'axios' {
    export interface AxiosRequestConfig {
        loading?: boolean;
    }
}


// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (
            list.url === config.url && 
            list.method === config.method && 
            JSON.stringify(list.params) === JSON.stringify(config.params) && 
            JSON.stringify(list.data) === JSON.stringify(config.data)
        ) {
            // 执行取消操作
            if(config.loading) {
                Toast.clear();
            }
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            if(pending.length > 1){
                pending.splice(item, 1)
            }
        }
    }
};

// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;


const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_GATEWAY_URI,
    timeout: 60000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
    if(error.config.loading) {
        Toast.clear();
    }
    if (error.response) {
        switch (error.response.status) {
        case 401:
            // 登录过期错误处理
            break;
        case 500:
            // 服务器错误处理
            break;
        default:
          Toast(error.response.data.msg);
        }
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(error.response);
};

// request interceptor
request.interceptors.request.use((config: AxiosRequestConfig) => {
    /**
     * 如果token 存在，则给请求头加token
     */
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.token = token;
    }

    // qs是axios自带的序列化参数方式
    if (
        config.headers &&
        config.headers["Content-Type"] &&
        config.headers["Content-Type"].includes("application/x-www-form-urlencoded")
    ) {
        config.params = qs.stringify(config.params);
    }
    if(config.loading) {
        Toast.loading({
            duration: 0,
            message: '加载中',
            forbidClick: true,
        });
    }
    removePending(config);
    config.cancelToken = new CancelToken((c) => {
        pending.push({ url: config.url, method: config.method, params: config.params, data:config.data, cancel: c, });
    });
    return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response: AxiosResponse) => {
    if(response.config.loading) {
        Toast.clear();
    }
    removePending(response.config);
    return response.data;
}, errorHandler);

export default request.request;
