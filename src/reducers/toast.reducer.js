import { toastConstant } from "../actions/constant";

const intialState={
    isset:false,
    msg:"",
    bg:""
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case toastConstant.TOAST_SET_MSG:{
            return {
                ...state,
                isset:true,
                msg:action.msg,
                bg:action.bg
            }
        }
        case toastConstant.TOAST_EMPTY_STATE:{
            return {
                ...state,
                isset:false,
                msg:"",
                bg:""
            }
        }
        default:
            return state;
    }
}