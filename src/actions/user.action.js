import {userConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'



export const registration=(dataObj)=>{

    return async (dispatch)=>{

        dispatch({
            type:userConstant.USER_REGISTER_REQ,
            data:"Requesting..."
        })
        if(dataObj.count<=0){
            dispatch({
                type:userConstant.USER_REGISTER_FAILURE,
                payload:"OTP Limit reached"
            })
            dispatch(setToastMsg("OTP Limit reached",true))
        }else{
            const res=await axios.post('/user/otpsend',dataObj)
            if(res.status==200){
                dispatch({
                    type:userConstant.USER_REGISTER_SUC,
                    payload:res.data
                })
                if(res.data.user.count<=2){
                    dispatch(setToastMsg(res.data.message+"! "+res.data.user.count+" Trial Remaining",false));
                }else{
                    dispatch(setToastMsg(res.data.message,false));
                }
            }else if(res.status==203){
                dispatch({
                    type:userConstant.USER_REGISTER_FAILURE,
                    payload:res.data.message
                })
                dispatch(setToastMsg(res.data.message,true))
            }
        }
        
    }
}


export const login=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem('accessToken2')){
            localStorage.removeItem('accessToken2');
        }
        const res=await axios.post('/user/signin',dataObj);
        console.log(res);
        if(res.status==200){
            localStorage.setItem("accessToken1",res.data.accesstoken+" kalptaru");
            // localStorage.setItem("enc","");
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

export const logout=()=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGOUT_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem("accessToken1")){
            
            localStorage.clear();
            dispatch({
                type:userConstant.USER_LOGOUT_SUC
            })
            dispatch(setToastMsg("Logout Success",false));
            
        }else{
            // console.log("hii");
            dispatch({
                type:userConstant.USER_LOGOUT_FAILURE,
            })
            dispatch(setToastMsg("Something Error",true));
        }
    }
}

export const preLoginusingToken=(token)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem('accessToken2')){
            localStorage.removeItem('accessToken2');
        }
        const res=await axios.post('/user/signinAccess',token);
        // console.log(res);
        if(res.status==200){
            localStorage.setItem("accessToken1",res.data.accesstoken+" kalptaru");
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

export const statusOnline=(userId)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.USER_ONLINE_REQ
        })
        const res=await axios.post("/user/statusOnline",userId)
        if(res.status==200){
            dispatch({
                type:userConstant.USER_ONLINE_REQ
            })
        }else if(res.status==203){
            dispatch({
                type:userConstant.USER_ONLINE_FAILURE
            })
        }
    }
}

export const statusOffline=(userId)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.USER_OFFLINE_REQ
        })
        const res=await axios.post("/user/statusOffline",userId)
        if(res.status==200){
            dispatch({
                type:userConstant.USER_OFFLINE_REQ
            })
        }else if(res.status==203){
            dispatch({
                type:userConstant.USER_OFFLINE_FAILURE
            })
        }
    }
}
export const emptyuserState=()=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.EMPTY_REQ
        })
    }
}
export const otpverify=(obj)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.OTP_VERIFY_REQ
        })
        const res=await axios.post("/user/otpverify",obj)
        if(res.status==200){
            dispatch({
                type:userConstant.OTP_VERIFY_SUC
            })
            dispatch(setToastMsg(res.data.message,false));
        }else if(res.status==203){
            dispatch({
                type:userConstant.OTP_VERIFY_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const otpsendForgotPassword=(obj)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.FORGOT_OTP_REQ
        })
        const res=await axios.post("/user/forgotpasswordotp",obj)
        if(res.status==200){
            dispatch({
                type:userConstant.FORGOT_OTP_SUC,
                payload:res.data
            })
            dispatch(setToastMsg(res.data.message,false));
        }else if(res.status==203){
            dispatch({
                type:userConstant.FORGOT_OTP_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const otpverifyForgotPassword=(obj)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.FORGOT_OTP_VERIFY_REQ
        })
        const res=await axios.post("/user/forgotpasswordotpverify",obj)
        if(res.status==200){
            dispatch({
                type:userConstant.FORGOT_OTP_VERIFY_SUC,
                payload:res.data
            })
            dispatch(setToastMsg(res.data.message,false));
        }else if(res.status==203){
            dispatch({
                type:userConstant.FORGOT_OTP_VERIFY_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const passwordChange=(obj)=>{
    return async(dispatch)=>{
        dispatch({
            type:userConstant.PASSWORD_CHANGE_REQ
        })
        const res=await axios.post("/user/passwordchange",obj)
        if(res.status==200){
            dispatch({
                type:userConstant.PASSWORD_CHANGE_SUC,
                payload:res.data
            })
            dispatch(setToastMsg(res.data.message,false));
            dispatch(emptyuserState());
        }else if(res.status==203){
            dispatch({
                type:userConstant.PASSWORD_CHANGE_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}