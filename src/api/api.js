import axios from './http'
import {prefix} from '../config'

// 登录
export const requestLogin = params => {
  return axios.post(`${prefix}login`, params)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~示例
// GET获取
// export const getUserList = params => {
//   return axios.get(`${prefix}user/index`, {params: params})
// }
// DELETE删除
// export const deleteUser = params => {
//   return axios.delete(`${prefix}user/delete`, {params: params})
// }
// PUT修改
// export const editUser = params => {
//   return axios.put(`${prefix}user/update`, params)
// }

//  附件下载
// export const download = (controller ='lfile' ,action ='downLoadFile') => {
//   return axios.defaults.baseURL +`${prefix}${controller}/${action}`;
// }
