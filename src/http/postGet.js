import axiosService from 'axiosIntercept';
import Promise from 'es6-promise';

Promise.polyfill();
alert(1)
export default class RequestService {
    axiosRequest(param) {
     return new Promise((resolve, reject) => {
        axiosService.request({
            url: param.url || '',
            method: param.method || 'GET',
            responseType: param.responseType || 'json',
            data: param.data || null,
            params: param.params || '',
        }).then(res => {
             resolve === 'function' && resolve(res);
        }).catch(error => {
             reject === 'function' && reject(error);
        })
     })
    }
}