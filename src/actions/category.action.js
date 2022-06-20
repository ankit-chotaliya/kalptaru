import {categoryConstant} from './constant'
import axios from '../utils/axios'
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
        axios.post('/category/createCategory',CategoryObj)
        .then(res=>{
            dispatch({
                type:categoryConstant.CATEGORY_ADD_SUC,
                payload:res.data
            })
            alert("Category Added Successfully");
            dispatch(getAllCategory());
        })
        .catch(err=>{
            dispatch({
                type:categoryConstant.CATEGORY_ADD_FAILURE,
                payload:"Category Can't Add!"
            })
            alert("Catagory Can't Added!! try Again!");
        })
    }
}