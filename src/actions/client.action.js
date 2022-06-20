import {clientConstant} from './constant'
import axios from '../utils/axios'
export const getAllClient=()=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.GET_ALL_CLIENT_REQ,
            data:"Please Wait..."
        })
        axios.get('/client/getClient')
        .then(res=>{
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:clientConstant.GET_ALL_CLIENT_FAILURE,
                payload:err.message
            })
        })
    }
}

export const createClient=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:clientConstant.ADD_CLIENT_REQ,
            data:"Please Wait..."
        })
        axios.post('/client/createClient',dataObj)
        .then(res=>{
            dispatch({
                type:clientConstant.ADD_CLIENT_SUC,
                payload:res.data
            })
            dispatch(getAllClient());
            alert("Client Added Successfully");
           
        })
        .catch(err=>{
            dispatch({
                type:clientConstant.ADD_CLIENT_FAILURE,
                payload:"Client Can't Add!"
            })
            alert("Client Can't Added!! try Again!");
        })
    }
}