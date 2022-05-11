import {clientConstant} from './constant'
import axios from '../utils/axios'
export const getAllClient=()=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.GET_ALL_CLIENT_REQ,
            data:"Requesting..."
        })
        axios.get('/client/getClient')
        .then(res=>{
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_FAILURE,
                payload:err.message
            })
        })
    }
}