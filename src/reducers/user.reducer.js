import { adminUserConstant, userConstant } from '../actions/constant'
const intialState = {
    loading: false,
    data: {
    },
    err: "",
    success: false
}

export default (state = intialState, action) => {
    switch (action.type) {
        case userConstant.USER_LOGIN_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                authenticate: false,
            }
        }
        case userConstant.USER_LOGIN_SUC: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: true,
                authenticate: true,
            }
        }
        case userConstant.USER_LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false,
                authenticate: false,
            }
        }
        case userConstant.USER_ONLINE_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
            }
        }
        case userConstant.USER_ONLINE_SUC: {
            return {
                ...state,
                loading: false,
                success: true,
            }
        }
        case userConstant.USER_ONLINE_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
            }
        }
        case userConstant.USER_OFFLINE_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
            }
        }
        case userConstant.USER_OFFLINE_SUC: {
            return {
                ...state,
                loading: false,
                success: true,
            }
        }
        case userConstant.USER_OFFLINE_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
            }
        }
        case userConstant.USER_LOGOUT_SUC: {
            return {
                ...state,
                loading: false,
                data: {
                },
                err: "",
                success: false
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_FAILURE:{
            return {
                ...state,
                loading:false,
                data:action.data
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_SUC:{
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_FAILURE:{
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