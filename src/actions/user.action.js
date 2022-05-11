import {userConstant} from './constant'
import axios from '../utils/axios'
export const login=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        axios.post('/user/signin',dataObj)
        .then(res=>{
            dispatch({
                type:userConstant.USER_LOGIN_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:userConstant.USER_LOGIN_FAILURE,
                payload:err.message
            })
        })
    }
}