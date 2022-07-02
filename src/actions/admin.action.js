import { adminConstant, adminClientConstant, adminKarigarConstant, adminUserConstant, adminOrderConstant } from "./constant";
import axios from "../utils/axios";
import { setToastMsg } from "./toast.action";

export const adminLogin = (dataobj) =>{
    return async (dispatch)=>{
        dispatch({
          type:adminConstant.ADMIN_LOGIN_REQ,
          data:"Wait For a while "
        })
        if(localStorage.getItem("accessToken1")){
            localStorage.removeItem("acccessToken1");
        }
        const res=await axios.post('/admin/loginadmin',dataobj);
        if (res.status==200) {
            console.log(res.data);
            
            localStorage.setItem("accessToken2",res.data.accesstoken+" kalptaru");
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

export const preadminloginusingToken = (accesstoken)=>{
    return async (dispatch) =>{
        dispatch({
            type:adminConstant.ADMIN_LOGIN_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem("accessToken1")){
            localStorage.removeItem("acccessToken1");
        }
        const res = await axios.post('/admin/adminsigninAccess',accesstoken);

        if (res.status==200) {
            console.log(res.data.admin);
            localStorage.setItem("accessToken2",res.data.accesstoken+" kalptaru");
            dispatch({
                type:adminConstant.ADMIN_LOGIN_SUC,
                payload:res.data
            })
        }else if (res.status==203) {
            dispatch({
                type:adminConstant.ADMIN_LOGIN_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true))
        }
    }
}

export const adminLogout=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminConstant.ADMIN_LOGOUT_REQ,
            data:"Requesting..."
        })
        if(localStorage.getItem("accessToken2")){
            
            localStorage.clear();
            dispatch({
                type:adminConstant.ADMIN_LOGOUT_SUC
            })
            dispatch(setToastMsg("Logout Success",false));
            
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
    return async (dispatch)=>{
        dispatch({
            type:adminClientConstant.DELETE_ADMIN_CLIENT_REQ,
        })
         const res = await axios.delete('/admin/deleteClient/'+clientId)
         if (res.status==200){
            
            dispatch({
                type:adminClientConstant.DELETE_ADMIN_CLIENT_SUC,
            })
            dispatch(adminGetAllClient());
            dispatch(setToastMsg("Client Deleted Successfully!",true));
            
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

export const adminDeleteKarigar=(karigarId)=>{
    console.log(karigarId);
    return async (dispatch)=>{
        dispatch({
            type:adminKarigarConstant.DELETE_ADMIN_KARIGAR_REQ,
        })
         const res = await axios.delete('/admin/deleteKarigar/'+karigarId)
         console.log(res);
         if (res.status==200){
            
            
            dispatch({
                type:adminKarigarConstant.DELETE_ADMIN_KARIGAR_SUC,
            })
            dispatch(adminGetAllKarigar());
            dispatch(setToastMsg("Karigar Deleted Successfully!",true));
        }
        else if (res.status==203){
            dispatch({
                type:adminKarigarConstant.DELETE_ADMIN_KARIGAR_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
            dispatch(adminGetAllKarigar());
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

export const adminDeleteuser=(userId)=>{
    console.log(userId);
    return async (dispatch)=>{
        dispatch({
            type:adminUserConstant.DELETE_ADMIN_USER_REQ,
        })
         const res = await axios.delete('/admin/deleteUser/'+userId)
         console.log(res);
         if (res.status==200){
            
            dispatch({
                type:adminUserConstant.DELETE_ADMIN_USER_SUC,
            })
            dispatch(adminGetAllUser());
            dispatch(setToastMsg("User Deleted Successfully!",true));
        }
        else if (res.status==203){
            dispatch({
                type:adminUserConstant.DELETE_ADMIN_USER_FAILURE,
                payload:res.data.message
            })
            dispatch(setToastMsg(res.data.message,true));
            dispatch(adminGetAllUser());
        }
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

export const adminAddUser=(dataObj)=>{

    return async (dispatch)=>{

        dispatch({
            type:adminUserConstant.USER_ADMIN_REGISTER_REQ,
            data:"Requesting..."
        })

        const res = await axios.post('/user/signup', dataObj)

        if(res.status == 200){
            dispatch({
                type:adminUserConstant.USER_ADMIN_REGISTER_SUC,
                payload:res.data
            })
            dispatch(setToastMsg("Registration Successfull",false));
            dispatch(adminGetAllUser());
            
        }else if(res.status==203){
            dispatch({
                type:adminUserConstant.USER_ADMIN_REGISTER_FAILURE,
                payload:"User Can't Add!"
            })
            dispatch(setToastMsg(res.data.message,true));
        }
    }

}

export const adminGetAllOrder=()=>{
    return async (dispatch)=>{
        dispatch({
            type:adminOrderConstant.GET_ADMIN_ALL_ORDER_REQ,
            data:"Please Wait..."
        })
        axios.post('admin/getallOrder')
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

export const adminUActivateDeactivate=(userId)=>{
    return async (dispatch)=>{
        dispatch({
            type:adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_REQ,
            success:false,
            data:"Please Wait..."
        })
        const res=await axios.post('admin/userActivate',userId)
        if(res.status==200){
            dispatch({
                type:adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_SUC,
                success:true,
                payload:res.data
            })
            dispatch(adminGetAllUser());
            dispatch(setToastMsg(res.data.message,false));
     
        }else if(res.status==203){
            dispatch({
                type:adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_FAILURE,
                success:false,
                payload:res.data
            })
            dispatch(setToastMsg(res.data.message,true));
     
        }
    }
}
