import {userConstant} from './constant'
import axios from '../utils/axios'


export const registration=(dataObj)=>{

    return async (dispatch)=>{

        dispatch({
            type:userConstant.USER_REGISTER_REQ,
            data:"Requesting..."
        })

        axios.post('/user/signup', dataObj)
        .then(res=>{

            alert("Registration Successfully")
            dispatch({
                type:userConstant.USER_REGISTER_SUC,
                payload:res.data
            })
            
        })
        .catch(err=>{

            alert("Registration Error");
            dispatch({
                type:userConstant.USER_REGISTER_FAILURE,
                payload:err.message
            })

        })
    }

}


export const login=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:userConstant.USER_LOGIN_REQ,
            data:"Requesting..."
        })
        axios.post('/user/signin',dataObj)
        .then(res=>{
            alert("Login Success");
            localStorage.setItem("accessToken",res.data.accesstoken+" kalptaru");
            dispatch({
                type:userConstant.USER_LOGIN_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            alert("Login Error");
            dispatch({
                type:userConstant.USER_LOGIN_FAILURE,
                payload:err.message
            })
        })
    }
}