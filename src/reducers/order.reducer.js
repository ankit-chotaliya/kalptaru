import {orderConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case orderConstant.GET_ALL_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                data:action.data
            }
        }
        case orderConstant.GET_ALL_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case orderConstant.GET_ALL_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload
            }
        }
        default:
            return state;
    }
}
