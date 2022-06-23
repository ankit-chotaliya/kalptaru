import { adminConstant, adminClientConstant, adminKarigarConstant, adminUserConstant, adminOrderConstant } from "./constant";
import axios from "../utils/axios";
import { setToastMsg } from "./toast.action";

export const adminLogin = (dataobj) =>{
    return async (dispatch)=>{
        dispatch({
          type:adminConstant.ADMIN_LOGIN_REQ,
          data:"Wait For a while "
        })
        const res=await axios.post('/admin/loginadmin',dataobj);
        if (res.status==200) {

            localStorage.setItem("accesstoken",res.data.accesstoken);
            dispatch({
                type:adminConstant.ADMIN_LOGIN_SUC,
                payload:res.data
            })
            dispatch(setToastMsg("Login Successful",false));
        }else if (res.status==203){
            dispatch({
                type:adminConstant.ADMIN_LOGIN_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}

export const adminLogout=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminConstant.ADMIN_LOGOUT_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem("accessToken")){
            
            localStorage.clear();
            dispatch({
                type:adminConstant.ADMIN_LOGOUT_SUC
            })
            //dispatch(setToastMsg("Login Success",false));
            
        }else{
            // console.log("hii");
            dispatch({
                type:adminConstant.ADMIN_LOGOUT_FAILURE,
            })
            dispatch(setToastMsg("Something Error",true));
        }
    }
}

export const adminGetAllClient=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminClientConstant.GET_ADMIN_ALL_CLIENT_REQ,
            data:"Please Wait..."
        })
        axios.get('/admin/getallClient')
        .then(res=>{
            dispatch({
                type:adminClientConstant.GET_ADMIN_ALL_CLIENT_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:adminClientConstant.GET_ADMIN_ALL_CLIENT_FAILURE,
                payload:err.message
            })
        })
    }
}

export const adminDeleteClient=(clientId)=>{
    console.log(clientId);
    return async (dispatch)=>{
        dispatch({
            type:adminClientConstant.DELETE_ADMIN_CLIENT_REQ,
        })
         const res = await axios.delete('/admin/deleteClient/'+clientId)
         console.log(res);
         if (res.status==200){
            dispatch(setToastMsg("Client Deleted Successfully!",false));
            dispatch(adminGetAllClient());
            dispatch({
                type:adminClientConstant.DELETE_ADMIN_CLIENT_SUC,
            })
            
        }
        else if (res.status==203){
            dispatch({
                type:adminClientConstant.DELETE_ADMIN_CLIENT_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
            dispatch(adminGetAllClient());
        }
    }
}

export const adminGetAllKarigar=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_REQ,
            data:"Please Wait..."
        })
        axios.get('/admin/getallKarigar')
        .then(res=>{
            dispatch({
                type:adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_FAILURE,
                payload:err.message
            })
        })
    }
}

export const adminGetAllUser=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminUserConstant.GET_ADMIN_ALL_USER_REQ,
            data:"Please Wait..."
        })
        axios.get('/admin/getallUser')
        .then(res=>{
            dispatch({
                type:adminUserConstant.GET_ADMIN_ALL_USER_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:adminUserConstant.GET_ADMIN_ALL_USER_FAILURE,
                payload:err.message
            })
        })
    }
}

export const adminGetAllOrder=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminOrderConstant.GET_ADMIN_ALL_ORDER_REQ,
            data:"Please Wait..."
        })
        axios.get('admin/getallOrder')
        .then(res=>{
            dispatch({
                type:adminOrderConstant.GET_ADMIN_ALL_ORDER_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:adminOrderConstant.GET_ADMIN_ALL_ORDER_FAILURE,
                payload:err.message
            })
        })
    }
}

