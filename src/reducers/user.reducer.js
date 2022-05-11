import {userConstant} from '../actions/constant'
const intialState={
    loading:false,
    data:{
    },
    err:"",
    success:false
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case userConstant.USER_LOGIN_REQ:{
            return {
                ...state,
                loading:true,
            }
        }
        case userConstant.USER_LOGIN_SUC:{
            return {
                ...state,
                loading:false,
                data:action.payload,
                success:true
            }
        }
        case userConstant.USER_LOGIN_FAILURE:{
            return {
                ...state,
                loading:false,
                err:action.payload,
                success:false
            }
        }
        default:
            return state;
    }
}