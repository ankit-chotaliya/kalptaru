import {clientConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{},
    err:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case clientConstant.GET_ALL_CLIENT_REQ:{
            return {
                ...state,
                loading:true,
                msg:action.data
            }
        }
        case clientConstant.GET_ALL_CLIENT_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case clientConstant.GET_ALL_CLIENT_FAILURE:{
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