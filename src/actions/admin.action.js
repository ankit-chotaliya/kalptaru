import { adminConstant, userConstant } from "./constant";
import axios from "../utils/axios";
import { setToastMsg } from "./toast.action";

export const login = (dataobj) =>{
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