import {karigarConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'
import { adminGetAllKarigar } from './admin.action'
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

export const createKarigar=(dataObj,isAdmin)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.ADD_KARIGAR_REQ,
            data:"Please Wait..."
        })
        const res=await axios.post('/karigar/createKarigar',dataObj)
        if(res.status==200){
            dispatch({
                type:karigarConstant.ADD_KARIGAR_SUC,
                payload:res.data
            })
            if(isAdmin){
                dispatch(adminGetAllKarigar());
            }else{
                dispatch(getAllKarigar());
            }
            
            dispatch(setToastMsg("Karigar Added Successfully",false));
        }else if(res.status==203){
            dispatch({
                type:karigarConstant.ADD_KARIGAR_FAILURE,
                payload:"Karigar Can't Add!"
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const createKarigarCsv=(dataObj,isAdmin)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.ADD_KARIGAR_CSV_REQ
        })
        const res=await axios.post('/karigar/createKarigarCsv',{dataObj})
        if(res.status==200){
            dispatch({
                type:karigarConstant.ADD_KARIGAR_CSV_SUC,
                payload:res.data
            })
            if(isAdmin){
                dispatch(adminGetAllKarigar());
            }else{
                dispatch(getAllKarigar());
            }
            dispatch(setToastMsg("Karigar Added Successfully!",false));
            
        }else if(res.status==203){
            dispatch({
                type:karigarConstant.ADD_KARIGAR_CSV_FAILURE,
                payload:"Karigar Can't Add!"
            })
            dispatch(setToastMsg(res.data.message,true));
        }
      
    }
}