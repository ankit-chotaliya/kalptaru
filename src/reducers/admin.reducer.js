import { adminConstant } from "../actions/constant";

const intialState={
    loading:false,
    data:{

    },
    err:"",
    success:false
}

export default(state=intialState,action)=>{
    switch (action.type) {
        case adminConstant.ADMIN_LOGIN_REQ:
            return{
                ...state,
                loading:true,
                success:false,
                authenticate:false,
            }
        case adminConstant.ADMIN_LOGIN_SUC:{
            return{
                ...state,
                loadibg:false,
                data:action.payload,
                success:true,
                authenticate:true,
            }
        }    
        case adminConstant.ADMIN_LOGIN_FAILURE:{
            return{
                ...state,
                loading:false,
                err:action.payload,
                success:false,
                authenticate:false
            }
        }
        
    
        default:
            return state;
    }
}