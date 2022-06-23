import {orderConfirmConstant} from '../actions/constant'
const intialState={
    loading:false,
    isSet:false,
    data:[],
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case orderConfirmConstant.ORDER_SET_REQ:{
            return {
                ...state,
                loading:true,
                isSet:false,
            }
        }
        case orderConfirmConstant.ORDER_SET_SUC:{
            return {
                ...state,
                loading:false,
                data:[...state.data,action.payload],
                isSet:true,
            }
        }
        case orderConfirmConstant.ORDER_SET_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload,
                isSet:false,
            }
        }
        case orderConfirmConstant.ORDER_SET_EMPTY:{
            return {
                ...state,
                loading:false,
                data:[],
                isSet:false,
                err:""
            }
        }
        default:
            return state;
    }
}