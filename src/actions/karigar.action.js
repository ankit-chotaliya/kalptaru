import {karigarConstant} from './constant'
import axios from '../utils/axios'
export const getAllKarigar=()=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.GET_ALL_KARIGAR_REQ,
            data:"Requesting..."
        })
        axios.get('/karigar/getKarigar')
        .then(res=>{
            dispatch({
                type:karigarConstant.GET_ALL_KARIGAR_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.GET_ALL_KARIGAR_FAILURE,
                payload:err.message
            })
        })
    }
}