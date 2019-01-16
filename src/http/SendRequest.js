// import axios from 'axios'
import Promise from 'es6-promise'
import qs from 'qs'
// import { reject } from 'rsvp';
import axiosService from './axiosIntercept';
let axios = {
    post:'',
    get:''
}

axios.post = (api,data) => {
    let params = qs.stringify(data)
    return new Promise((resolve,reject) =>{
        axiosService.post(api,params).then(res =>{
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}

axios.get = (api,data) =>{
    let params = qs.stringify(data)
    return new Promise((resolve,reject) =>{
        axiosService.get(api,params).then(res =>{
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}

export default axios