import {orderConstant} from './constant'
import axios from '../utils/axios'

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
