import { karigarConstant } from "./constant";
import axios from '../utils/axios';

export const getAllKarigar=()=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.GET_ALL_KARIGAR_REQ,
            data:"Request For Data...."
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
export const Addkarigar=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.NEW_KARIGAR_REQ,
            data:"Request For Data...."
        })
        axios.post('/karigar/createKarigar',dataObj)
        .then(res=>{
            dispatch({
                type:karigarConstant.NEW_KARIGAR_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.NEW_KARIGAR_FAILURE,
                payload:err.message
            })
        })
    }
}