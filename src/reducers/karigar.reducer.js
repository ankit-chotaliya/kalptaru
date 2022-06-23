import {karigarConstant, adminKarigarConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case karigarConstant.GET_ALL_KARIGAR_REQ:{
            return {
                ...state,
                loading:true,
                msg:action.data
            }
        }
        case karigarConstant.GET_ALL_KARIGAR_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case karigarConstant.GET_ALL_KARIGAR_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload
            }
        }
        case karigarConstant.ADD_KARIGAR_REQ:{
            return {
                ...state,
                loading:true,
                msg:action.data
            }
        }
        case karigarConstant.ADD_KARIGAR_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case karigarConstant.ADD_KARIGAR_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_REQ:{
            return{
                ...state,
                loading:true,
                err:action.data
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_SUC:{
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case adminKarigarConstant.GET_ADMIN_ALL_KARIGAR_FAILURE:{
            return{
                ...state,
                loading:false,
                err:action.payload
            }
        }
        default:
            return state;
    }
}