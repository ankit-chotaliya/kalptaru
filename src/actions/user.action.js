import {userConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'
export const login=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        const res=await axios.post('/user/signin',dataObj);
        console.log(res);
        if(res.status==200){
            localStorage.setItem("accessToken",res.data.accesstoken+" kalptaru");
            dispatch({
                type:userConstant.USER_LOGIN_SUC,
                payload:res.data
            })
            dispatch(setToastMsg("Login Success",false));
            
        }else if(res.status==203){
            // console.log("hii");
            dispatch({
                type:userConstant.USER_LOGIN_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const preLoginusingToken=(token)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        const res=await axios.post('/user/signinAccess',token);
        // console.log(res);
        if(res.status==200){
            localStorage.setItem("accessToken",res.data.accesstoken+" kalptaru");
            dispatch({
                type:userConstant.USER_LOGIN_SUC,
                payload:res.data
            })
            // dispatch(setToastMsg("Login Success",false));
            
        }else if(res.status==203){
            // console.log("hii");
            dispatch({
                type:userConstant.USER_LOGIN_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

