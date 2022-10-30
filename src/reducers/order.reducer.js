import {adminOrderConstant, orderConstant} from '../actions/constant'
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
                success:false,
                isPDFset:false,
                editsuccess:false,
                isdelete:false,
                data:action.data
            }
        }
        case orderConstant.GET_ALL_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                success:true,
                editsuccess:false,
                isdelete:false,
                dataAdded:0,
                data:action.payload
            }
        }
        case orderConstant.GET_ALL_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                success:false,
                editsuccess:false,
                isdelete:false,
                dataAdded:0,
                err:action.payload
            }
        }
        case orderConstant.NEW_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                isPDFset:false,
                success:false,
                editsuccess:false,
                isdelete:false,
                dataAdded:0,
                data:action.data
            }
        }
        case orderConstant.NEW_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                editsuccess:false,
                isdelete:false,
                success:true,
                dataAdded:state.dataAdded+1,
                data:action.payload
            }
        }
        case orderConstant.NEW_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                isPDFset:false,
                success:false,
                editsuccess:false,
                isdelete:false,
                dataAdded:0,
                err:action.payload
            }
        }
        case orderConstant.NEW_ORDER_PDF_REQ:{
            return {
                ...state,
                loading:true,
                success:false,
                editsuccess:false,
                isdelete:false,
                isPDFset:false,
                
                data:action.data
            }
        }
        case orderConstant.NEW_ORDER_PDF_SUC:{
            return {
                ...state,
                loading:false,
                editsuccess:false,
                isdelete:false,
                success:true,
                isPDFset:true,
             
                data:action.payload
            }
        }
        case orderConstant.NEW_ORDER_PDF_FAILURE:{
            return {
                ...state,
                loading:false,
                success:false,
                editsuccess:false,
                isdelete:false,
                isPDFset:false,
                
                err:action.payload
            }
        }
        case orderConstant.EDIT_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.EDIT_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                success:true,
                editsuccess:true,
                isdelete:false
            }
        }
        case orderConstant.EDIT_ORDER_FAILURE:{
            return {
                ...state,
                loading:false,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.DELETE_ORD_REQ:{
            return {
                ...state,
                loading:true,
                success:false,
                editsuccess:false,
                isdelete:false,
                
            }
        }
        case orderConstant.DELETE_ORD_SUC:{
            return {
                ...state,
                loading:false,
                success:true,
                editsuccess:false,
                isdelete:true
            }
        }
        case orderConstant.DELETE_ORD_FAILURE:{
            return {
                ...state,
                loading:false,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.REPEAT_ORDER_REQ:{
            return{
                ...state,
                loading:true,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.REPEAT_ORDER_SUC:{
            return{
                ...state,
                loading:false,
                success:true,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.REPEAT_ORDER_FAILURE:{
            return{
                ...state,
                loading:false,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.CHANGE_ORDER_STATUS_REQ:{
            return{
                ...state,
                loading:true,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.CHANGE_ORDER_STATUS_SUC:{
            return{
                ...state,
                loading:false,
                success:true,
                editsuccess:false,
                isdelete:false
            }
        }
        case orderConstant.CHANGE_ORDER_STATUS_FAILURE:{
            return{
                ...state,
                loading:false,
                success:false,
                editsuccess:false,
                isdelete:false
            }
        }
        case adminOrderConstant.GET_ADMIN_ALL_ORDER_REQ:{
            return {
                ...state,
                loading:true,
                success:false,
                data:action.data
            }
        }
        case adminOrderConstant.GET_ADMIN_ALL_ORDER_SUC:{
            return {
                ...state,
                loading:false,
                success:true,
                data:action.payload
            }
        }
        case adminOrderConstant.GET_ADMIN_ALL_ORDER_FAILURE:{
            return{
                ...state,
                loading:false,
                success:false,
                err:action.payload
            }
        }
        default:
            return state;
    }
}
