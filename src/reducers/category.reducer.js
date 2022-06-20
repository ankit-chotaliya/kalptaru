import {categoryConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case categoryConstant.GET_ALL_CATEGORY_REQ:{
            return {
                ...state,
                loading:true,
                addsuccess:false,
                msg:action.data
            }
        }
        case categoryConstant.GET_ALL_CATEGORY_SUC:{
            return {
                ...state,
                loading:false,
                addsuccess:false,
                data:action.payload
            }
        }
        case categoryConstant.GET_ALL_CATEGORY_FAILURE:{
            return {
                ...state,
                loading:false,
                addsuccess:false,
                err:action.payload
            }
        }
        case categoryConstant.CATEGORY_ADD_REQ:{
            return {
                ...state,
                loading:true,
                addsuccess:false,
            }
        }
        case categoryConstant.CATEGORY_ADD_SUC:{
            return {
                ...state,
                loading:false,
                addsuccess:true,
                data:action.payload
            }
        }
        case categoryConstant.CATEGORY_ADD_FAILURE:{
            return {
                ...state,
                loading:false,
                addsuccess:false,
                err:action.payload
            }
        }
        default:
            return state;
    }
}