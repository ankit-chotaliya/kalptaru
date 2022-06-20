import { toastConstant } from "./constant"


export const setToastMsg=(msg,error)=>{
    return async (dispatch)=>{
        if(error){
            dispatch({
                type:toastConstant.TOAST_SET_MSG,
                msg:msg,
                bg:"danger"
            })
        }else{
            dispatch({
                type:toastConstant.TOAST_SET_MSG,
                msg:msg,
                bg:"success"
            })
        }
    }
}

export const emptyToastMsg=()=>{
    return async (dispatch)=>{
        dispatch({
            type:toastConstant.TOAST_EMPTY_STATE,
        })
    }
}