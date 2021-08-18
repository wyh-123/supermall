import { request } from "../network/request";
export function gethomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}