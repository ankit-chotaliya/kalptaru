import {clientConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'
export const getAllClient=()=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.GET_ALL_CLIENT_REQ,
            data:"Please Wait..."
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

export const createClient=(dataObj)=>{
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
            dispatch(getAllClient());
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