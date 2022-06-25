import { adminClientConstant, clientConstant } from '../actions/constant'
const intialState = {
    loading: false,
    data: {},
    err: "",
    success: false
}

export default (state = intialState, action) => {
    switch (action.type) {
        case clientConstant.GET_ALL_CLIENT_REQ: {
            return {
                ...state,
                loading:true,
                data:action.data,
                err:""
            }
        }
        case clientConstant.GET_ALL_CLIENT_SUC: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: true,
                loading:false
            }
        }
        case clientConstant.ADD_CLIENT_REQ: {
            return {
                loading:true,
                err:""
            }
        }
        case clientConstant.ADD_CLIENT_SUC: {
            return {
                ...state,
                loading:false,
                data:action.payload,
                err:""
            }
        }
        case clientConstant.ADD_CLIENT_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false
            }
        }
        case adminClientConstant.GET_ADMIN_ALL_CLIENT_REQ: {
            return {
                ...state,
                loading:true,
                data:action.data,
                err:""
            }
        }
        case adminClientConstant.GET_ADMIN_ALL_CLIENT_SUC: {
            return {
                ...state,
                loading:false,
                data:action.payload,
                err:""
            }
        }
        case adminClientConstant.GET_ADMIN_ALL_CLIENT_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false
            }
        }
        default:
            return state;
    }
}