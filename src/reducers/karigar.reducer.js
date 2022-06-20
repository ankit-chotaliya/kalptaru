import {karigarConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:"",
    success:false
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
                data:action.payload,
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
        default:
            return state;
    }
}