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
                otpVerified:false,passwordOTPVerified:false,
                authenticate: false,
            }
        }
        case userConstant.USER_LOGIN_SUC: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: true,
                otpVerified:false,passwordOTPVerified:false,
                authenticate: true,
            }
        }
        case userConstant.USER_LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
                authenticate: false,
            }
        }

        case adminUserConstant.USER_ADMIN_REGISTER_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
                authenticate: false,
            }
        }
        case adminUserConstant.USER_ADMIN_REGISTER_SUC: {
            return {
                ...state,
                loading: false,
                success: true,
                data:action.payload,
                otpVerified:false,passwordOTPVerified:false,
                authenticate: false,
            }
        }
        case adminUserConstant.USER_ADMIN_REGISTER_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
                authenticate: false,
                
            }
        }
        case userConstant.USER_ONLINE_REQ: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: false,
            }
        }
        case userConstant.USER_ONLINE_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: true,
            }
        }
        case userConstant.USER_ONLINE_FAILURE: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: false,
            }
        }
        case userConstant.USER_OFFLINE_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case userConstant.USER_OFFLINE_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: true,
            }
        }
        case userConstant.USER_OFFLINE_FAILURE: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: false,
            }
        }
        case userConstant.EMPTY_REQ: {
            return {
                ...state,
                loading: false,
                success: false,
                authenticate:false,
                otpVerified:false,passwordOTPVerified:false,
                data:{},
                err:"",
            }
        }
        case userConstant.OTP_VERIFY_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
                authenticate:false,
            }
        }
        case userConstant.OTP_VERIFY_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:true,
                success: true,
                authenticate:false,
            }
        }
        case userConstant.OTP_VERIFY_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                authenticate:false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case userConstant.FORGOT_OTP_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
                authenticate:false,
            }
        }
        case userConstant.FORGOT_OTP_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: true,
                data:action.payload,
                authenticate:false,
            }
        }
        case userConstant.FORGOT_OTP_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                authenticate:false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case userConstant.FORGOT_OTP_VERIFY_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,
                passwordOTPVerified:false,
                authenticate:false,
            }
        }
        case userConstant.FORGOT_OTP_VERIFY_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,
                success: true,
                data:action.payload,
                passwordOTPVerified:true,
                authenticate:false,
            }
        }
        case userConstant.FORGOT_OTP_VERIFY_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                authenticate:false,
                passwordOTPVerified:false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case userConstant.PASSWORD_CHANGE_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,
                passwordOTPVerified:false,
                authenticate:false,
            }
        }
        case userConstant.PASSWORD_CHANGE_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,
                passwordOTPVerified:false,
                success: true,
                authenticate:false,
            }
        }
        case userConstant.PASSWORD_CHANGE_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                authenticate:false,
                otpVerified:false,
                passwordOTPVerified:false,
            }
        }
        case userConstant.USER_LOGOUT_SUC: {
            return {
                ...state,
                loading: false,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_REQ:{
            return {
                ...state,
                loading:true,
                success:false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_SUC:{
            return{
                ...state,
                loading:false,
                success:true,
                data:action.payload,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case adminUserConstant.GET_ADMIN_ALL_USER_FAILURE:{
            return{
                ...state,
                loading:false,
                success:false,
                err:action.payload,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case adminUserConstant.DELETE_ADMIN_USER_REQ: {
            return {
                ...state,
                loading: true,
                success: false,
                otpVerified:false,passwordOTPVerified:false,
            }
        }
        case adminUserConstant.DELETE_ADMIN_USER_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: true
            }
        }
        case adminUserConstant.DELETE_ADMIN_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                err: action.payload,
                success: false
            }
        }
        case adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_REQ: {
            return {
                ...state,
                loading: true,
                otpVerified:false,passwordOTPVerified:false,
                success: false
            }
        }
        case adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_SUC: {
            return {
                ...state,
                loading: false,
                otpVerified:false,passwordOTPVerified:false,
                success: true
            }
        }
        case adminUserConstant.ADMIN_USER_ACTIVATE_DEACTIVATE_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                otpVerified:false,passwordOTPVerified:false,
                success: false
            }
        }
        default:
            return state;
    }
}