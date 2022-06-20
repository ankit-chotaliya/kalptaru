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

export const createKarigar=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.ADD_KARIGAR_REQ,
            data:"Please Wait..."
        })
        axios.post('/karigar/createKarigar',dataObj)
        .then(res=>{
            dispatch({
                type:karigarConstant.ADD_KARIGAR_SUC,
                payload:res.data
            })
            dispatch(getAllKarigar());
            alert("Karigar Added Successfully");
           
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.ADD_KARIGAR_FAILURE,
                payload:"Karigar Can't Add!"
            })
            alert("Karigar Can't Added!! try Again!");
        })
    }
}