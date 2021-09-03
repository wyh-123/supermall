import axios from 'axios'
export function request(config) {
        const instance = axios.create({
            baseURL: '接口添加coderwhy微信获取',
            timeout: 10000
        })
    /* axios的拦截器 */
    /* 传入两个参数（都是函数），发送成功调用第一个函数，发送失败调用第二个函数 */
    /* 请求拦截 */
    //instance.interceptors.request.use(config => {
        /* 请求拦截的作用 */
        /* 比如config中的一些信息不符合服务器的要求，要改 */
        /* 比如在发送网络请求时页面加一个请求的图标 */
        /* 某些网络请求需要携带token */
        //console.log(config);
        
        /* 返回出去，不然就被拦截了 */
        //return config
    //}, err => {
        //console.log(err);
    //})
    /* 响应拦截 */
    // instance.interceptors.response.use(res => {
    //     console.log(res);
    // }, err => {
    //     console.log(err);
    // })
    /* 发送请求 */
    /* axios返回一个promise */
        return instance(config)

}
