import {orderConstant} from '../actions/constant'
const intialState={
    loading:false,
    dataAdded:0,
    data:{},
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case orderConstant.GET_ALL_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                isPDFset:false,
                data:action.data
            }
        }
        case orderConstant.GET_ALL_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                dataAdded:0,
                data:action.payload
            }
        }
        case orderConstant.GET_ALL_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                dataAdded:0,
                err:action.payload
            }
        }
        case orderConstant.NEW_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                isPDFset:false,
                dataAdded:0,
                data:action.data
            }
        }
        case orderConstant.NEW_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                dataAdded:state.dataAdded+1,
                data:action.payload
            }
        }
        case orderConstant.NEW_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                dataAdded:0,
                err:action.payload
            }
        }
        case orderConstant.NEW_ORDER_PDF_REQ:{
            return {
                ...state,
                loading:true,
                isPDFset:false,
                
                data:action.data
            }
        }
        case orderConstant.NEW_ORDER_PDF_SUC:{
            return {
                ...state,
                loading:false,
                isPDFset:true,
             
                data:action.payload
            }
        }
        case orderConstant.NEW_ORDER_PDF_FAILURE:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                
                err:action.payload
            }
        }
        default:
            return state;
    }
}