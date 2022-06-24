import {orderConfirmConstant, orderConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'

export const getAllOrders=()=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.GET_ALL_ORDER_REQ,
            data:"Requesting..."
        })

        axios.get('/order/getOrders')
        .then(res=>{
            dispatch({
                type:orderConstant.GET_ALL_ORDER_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:orderConstant.GET_ALL_ORDER_FAILURE,
                payload:err.message
            })
        })
    }
}

export const createNewOrder=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.NEW_ORDER_REQ,
            data:"Please Wait..."
        })
        // console.log(dataObj);
        const res=await axios.post('/order/newOrders',dataObj);
        if(res.status==200){
            // dispatch(PDFfetch(res.data._id));
            console.log("From order create action :",res.data.data._id);
            dispatch({
                type:orderConstant.NEW_ORDER_SUC,
                payload:res.data
            })
            dispatch(setOrderConfirm(res.data.data._id));
            dispatch(setToastMsg("Order Created!",false));
            
        }else{
            // dispatch(emptyOrderConfirm());
            dispatch({
                type:orderConstant.NEW_ORDER_FAILURE,
                payload:"Order Can't Created!"
            })
            dispatch(setToastMsg("Try Again!",true));
        }
    }
}

export const PDFfetch=(orderId)=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.NEW_ORDER_PDF_REQ,
            data:"Please Wait..."
        })
        const res=await axios.get('order/getPDF/'+orderId);
        if(res.status=="200"){
            dispatch({
                type:orderConstant.NEW_ORDER_PDF_SUC,
                payload:res.data
            })
        }else{
            dispatch({
                type:orderConstant.NEW_ORDER_PDF_FAILURE,
                payload:"PDF Can't Fetched!"
            })
        }
    }
}

export const setOrderConfirm=(id)=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConfirmConstant.ORDER_SET_REQ,
            data:"Please Wait..."
        })
        if(id){
            dispatch({
                type:orderConfirmConstant.ORDER_SET_SUC,
                payload:id
            })
        }else{
            dispatch({
                type:orderConfirmConstant.ORDER_SET_FAILURE,
                payload:"Id Not Exist!"
            })
        }
    }
}

export const emptyOrderConfirm=()=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConfirmConstant.ORDER_SET_EMPTY,
            data:"Please Wait..."
        })
    }
}


//edit order actions
export const editOrder=(dataObj,orderId)=>{
    console.log("dataObj",dataObj);
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.EDIT_ORDER_REQ
        })
        const res=await axios.put('/order/editOrders/'+orderId,dataObj);
        if(res.status==200){
            dispatch(setToastMsg("Edit Order successfully!",false));
            dispatch(getAllOrders());
            dispatch({
                type:orderConstant.EDIT_ORDER_SUC
            })
            
        }else if(res.status==203){
            dispatch({
                type:orderConstant.EDIT_ORDER_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
            dispatch(getAllOrders());
        }
    }
}

//repeat order action
export const repeatOrder=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.REPEAT_ORDER_REQ
        })
        const res=await axios.post('order/repeatOrder',dataObj);
        if(res.status==200){
            dispatch({
                type:orderConstant.REPEAT_ORDER_SUC
            })
            dispatch(setToastMsg(res.data.message,false));
        }else if(res.status==203){
            dispatch({
                type:orderConstant.REPEAT_ORDER_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }else{
            dispatch(setToastMsg("Something went Wrong!",true));
        }
    }
}

//order status change
export const orderStatusChange=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:orderConstant.CHANGE_ORDER_STATUS_REQ
        })
        const res=await axios.post('order/orderStatuschange',dataObj);
        if(res.status==200){
            
            dispatch({
                type:orderConstant.CHANGE_ORDER_STATUS_SUC
            })
            dispatch(getAllOrders());
            dispatch(setToastMsg(res.data.message,false));
            
        }else if(res.status==203){
            dispatch({
                type:orderConstant.CHANGE_ORDER_STATUS_FAILURE
            })
            dispatch(setToastMsg(res.data.message,true));
        }else{
            dispatch(setToastMsg("Something went Wrong!",true));
        }
    }
}