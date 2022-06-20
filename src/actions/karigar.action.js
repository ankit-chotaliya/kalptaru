<<<<<<< HEAD
import { karigarConstant } from "./constant";
import axios from '../utils/axios';

=======
import {karigarConstant} from './constant'
import axios from '../utils/axios'
>>>>>>> 7f538adfeae6b1671d9d63991ac918df90637682
export const getAllKarigar=()=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.GET_ALL_KARIGAR_REQ,
<<<<<<< HEAD
            data:"Request For Data...."
=======
            data:"Requesting..."
>>>>>>> 7f538adfeae6b1671d9d63991ac918df90637682
        })
        axios.get('/karigar/getKarigar')
        .then(res=>{
            dispatch({
                type:karigarConstant.GET_ALL_KARIGAR_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.GET_ALL_KARIGAR_FAILURE,
                payload:err.message
            })
        })
    }
}
<<<<<<< HEAD
export const Addkarigar=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.NEW_KARIGAR_REQ,
            data:"Request For Data...."
=======

export const createKarigar=(dataObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:karigarConstant.ADD_KARIGAR_REQ,
            data:"Please Wait..."
>>>>>>> 7f538adfeae6b1671d9d63991ac918df90637682
        })
        axios.post('/karigar/createKarigar',dataObj)
        .then(res=>{
            dispatch({
<<<<<<< HEAD
                type:karigarConstant.NEW_KARIGAR_SUC,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.NEW_KARIGAR_FAILURE,
                payload:err.message
            })
=======
                type:karigarConstant.ADD_KARIGAR_SUC,
                payload:res.data
            })
            dispatch(getAllKarigar());
            alert("Karigar Added Successfully");
           
        })
        .catch(err=>{
            dispatch({
                type:karigarConstant.ADD_KARIGAR_FAILURE,
                payload:"Karigar Can't Add!"
            })
            alert("Karigar Can't Added!! try Again!");
>>>>>>> 7f538adfeae6b1671d9d63991ac918df90637682
        })
    }
}