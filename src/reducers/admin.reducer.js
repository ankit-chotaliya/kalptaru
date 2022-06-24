import { adminConstant } from "../actions/constant";

const intialState={
    loading:false,
    data:{

    },
    err:"",
    success:false,
    adminlogoutsuccess:false
}

export default(state=intialState,action)=>{
    switch (action.type) {
        case adminConstant.ADMIN_LOGIN_REQ:
            return{
                ...state,
                loading:true,
                success:false,
                adminlogoutsuccess:false,
                authenticate:false,
            }
        case adminConstant.ADMIN_LOGIN_SUC:{
            return{
                ...state,
                loading:false,
                data:action.payload,
                success:true,
                adminlogoutsuccess:false,
                authenticate:true,
            }
        }    
        case adminConstant.ADMIN_LOGIN_FAILURE:{
            return{
                ...state,
                loading:false,
                err:action.payload,
                success:false,
                authenticate:false,
                adminlogoutsuccess:false,
            }
        }

        case adminConstant.ADMIN_LOGOUT_REQ:{
            return{
                ...state,
                loading:true,
                adminlogoutsuccess:false,
            }
        }
        case adminConstant.ADMIN_LOGOUT_SUC:{
            return{
                ...state,
                loading:false,
                data:{},
                authenticate:false,
                success:false,
                adminlogoutsuccess:true
            }
        }
        case adminConstant.ADMIN_LOGOUT_FAILURE:{
            return{
                ...state,
                loading:false,
                adminlogoutsuccess:false
            }
        }
        
    
        default:
            return state;
    }
}