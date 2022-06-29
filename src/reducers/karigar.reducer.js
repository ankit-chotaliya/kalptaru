import {karigarConstant, adminKarigarConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:"",
    success: false
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case karigarConstant.GET_ALL_KARIGAR_REQ:{
            return {
                ...state,
                loading:true,
                msg:action.data,
                success: false
            }
        }
        case karigarConstant.GET_ALL_KARIGAR_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload,
                success: true
            }
        }
        case karigarConstant.GET_ALL_KARIGAR_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload,
                success: false
            }
        }
        case karigarConstant.ADD_KARIGAR_REQ:{
            return {
                ...state,
                loading:true,
                msg:action.data,
                success: false
            }
        }
        case karigarConstant.ADD_KARIGAR_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload,
                success: true
            }
        }
        case karigarConstant.ADD_KARIGAR_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload,
                success: false
            }
        }
        case karigarConstant.ADD_KARIGAR_CSV_REQ: {
            return {
                ...state,
                loading: true,
                success: false
            }
        }
        case karigarConstant.ADD_KARIGAR_CSV_SUC: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: true
            }
        }
        case karigarConstant.ADD_KARIGAR_CSV_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_REQ:{
            return{
                ...state,
                loading:true,
                err:action.data,
                success: false
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_SUC:{
            return{
                ...state,
                loading:false,
                data:action.payload,
                success: true
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_FAILURE:{
            return{
                ...state,
                loading:false,
                err:action.payload,
                success: false
            }
        }
        case adminKarigarConstant.DELETE_ADMIN_KARIGAR_REQ:{
            return{
                ...state,
                loading:true,
                success:false
            }
        }
        case adminKarigarConstant.DELETE_ADMIN_KARIGAR_SUC:{
            return{
                ...state,
                loading:false,
                success:true
            }
        }
        case adminKarigarConstant.DELETE_ADMIN_KARIGAR_FAILURE:{
            return{
                ...state,
                loading:true,
                err:action.payload,
                success:false
            }
        }
        default:
            return state;
    }
}