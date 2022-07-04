import {clientConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'
import { adminGetAllClient } from './admin.action'
export const getAllClient=()=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.GET_ALL_CLIENT_REQ,
            data:"Please Wait..."
        })
        const res=await axios.get('/client/getClient')
        if(res.status==200){
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_SUC,
                payload:res.data
            })
        }else if(res.status==203){
            alert(res.data.error);
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_FAILURE,
                payload:res.data.error.message
            })
        }
    }
}

export const createClient=(dataObj,isAdmin)=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.ADD_CLIENT_REQ
        })
        const res=await axios.post('/client/createClient',dataObj)
        if(res.status==200){
            dispatch({
                type:clientConstant.ADD_CLIENT_SUC,
                payload:res.data
            })
            if(isAdmin){
                dispatch(adminGetAllClient());
            }else{
                dispatch(getAllClient());
            }
            dispatch(setToastMsg("Client Added Successfully!",false));
            
        }else if(res.status==203){
            dispatch({
                type:clientConstant.ADD_CLIENT_FAILURE,
                payload:"Client Can't Add!"
            })
            dispatch(setToastMsg(res.data.message,true));
        }
      
    }
}

export const createClientCsv=(dataObj,isAdmin)=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.ADD_CLIENT_CSV_REQ
        })
        const res=await axios.post('/client/createClientCsv',{dataObj})
        if(res.status==200){
            dispatch({
                type:clientConstant.ADD_CLIENT_CSV_SUC,
                payload:res.data
            })
            if(isAdmin){
                dispatch(adminGetAllClient());
            }else{
                dispatch(getAllClient());
            }
            dispatch(setToastMsg("Client Added Successfully!",false));
            
        }else if(res.status==203){
            dispatch({
                type:clientConstant.ADD_CLIENT_CSV_FAILURE,
                payload:"Client Can't Add!"
            })
            dispatch(setToastMsg(res.data.message,true));
        }
      
    }
}