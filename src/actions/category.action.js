import {categoryConstant} from './constant'
import axios from '../utils/axios'
import { setToastMsg } from './toast.action'
export const getAllCategory=()=>{
    return async (dispatch)=>{
        dispatch({
            type:categoryConstant.GET_ALL_CATEGORY_REQ,
            data:"Please Wait..."
        })
        try{
            const res=await axios.get('/category/getCategory')
            dispatch({
                type:categoryConstant.GET_ALL_CATEGORY_SUC,
                payload:res.data
            });
        }
        catch(err){
            dispatch({
                type:categoryConstant.GET_ALL_CATEGORY_FAILURE,
                payload:err.message
            })
        }
    }
}

export const AddCategoryData=(CategoryObj)=>{
    return async (dispatch)=>{
        dispatch({
            type:categoryConstant.CATEGORY_ADD_REQ,
            data:"Please Wait..."
        })
        const res=await axios.post('/category/createCategory',CategoryObj)
        if(res.status==200){
            dispatch({
                type:categoryConstant.CATEGORY_ADD_SUC,
                payload:res.data
            })
            dispatch(getAllCategory());
            dispatch(setToastMsg("Category Added Successfully",false))
        }else if(res.status==203){
            dispatch({
                type:categoryConstant.CATEGORY_ADD_FAILURE,
                payload:"Category Can't Add!"
            })
            dispatch(getAllCategory());
            dispatch(setToastMsg(res.data.message,true));
        }
    }
}