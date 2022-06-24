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
<<<<<<< HEAD
                loading: true,
                data: action.data,
                success: false
=======
                loading:true,
                data:action.data,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
            }
        }
        case clientConstant.GET_ALL_CLIENT_SUC: {
            return {
                ...state,
<<<<<<< HEAD
                loading: false,
                data: action.payload,
                success: true
=======
                loading:false,
                data:action.payload,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
            }
        }
        case clientConstant.GET_ALL_CLIENT_FAILURE: {
            return {
                ...state,
<<<<<<< HEAD
                loading: false,
                err: action.payload,
                success: false
=======
                loading:false,
                err:action.payload,
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
            }
        }
        case clientConstant.ADD_CLIENT_REQ: {
            return {
                ...state,
<<<<<<< HEAD
                loading: true,
                success: false
=======
                loading:true,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
            }
        }
        case clientConstant.ADD_CLIENT_SUC: {
            return {
                ...state,
<<<<<<< HEAD
                loading: false,
                data: action.payload,
                success: true
=======
                loading:false,
                data:action.payload,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
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
<<<<<<< HEAD
                loading: true,
                data: action.data,
                success: false
=======
                loading:true,
                data:action.data,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
            }
        }
        case adminClientConstant.GET_ADMIN_ALL_CLIENT_SUC: {
            return {
                ...state,
<<<<<<< HEAD
                loading: false,
                data: action.payload,
                success: true
=======
                loading:false,
                data:action.payload,
                err:""
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
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
<<<<<<< HEAD
        case adminClientConstant.DELETE_ADMIN_CLIENT_REQ: {
            return {
                ...state,
                loading: true,
                success: false
            }
        }
        case adminClientConstant.DELETE_ADMIN_CLIENT_SUC: {
            return {
                ...state,
                loading: false,
                success: true
            }
        }
        case adminClientConstant.DELETE_ADMIN_CLIENT_FAILURE: {
            return {
                ...state,
                loading: false,
                err: action.payload,
                success: false
            }
        }
=======
>>>>>>> f2bc2717b0ea3b48b3cdf5b3c5474cc5648b6984
        default:
            return state;
    }
}