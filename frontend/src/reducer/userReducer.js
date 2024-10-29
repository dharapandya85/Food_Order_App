import { LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS, 
     LOGIN_REQUEST, 
     LOGIN_SUCCESS,
      REGISTER_USER_REQUEST, 
      REGISTER_USER_SUCCESS,
      LOGOUT_SUCCESS,
      LOAD_USER_FAIL,
      CLEAR_ERRORS,
      LOGIN_FAIL,
      REGISTER_USER_FAIL,
      LOGOUT_FAIL,
      UPDATE_PROFILE_REQUEST,
      UPDATE_PROFILE_SUCCESS,
      UPDATE_PROFILE_RESET,
      UPDATE_PROFILE_FAIL,
      UPDATE_PASSWORD_REQUEST,
      UPDATE_PASSWORD_SUCCESS,
      UPDATE_PASSWORD_FAIL,
      FORGOT_PASSWORD_REQUEST,
      NEW_PASSWORD_REQUEST,
      NEW_PASSWORD_SUCCESS,
      FORGOT_PASSWORD_SUCCESS,
      FORGOT_PASSWORD_FAIL,
      NEW_PASSWORD_FAIL,
      

     } from "../constants/userConstant";

//Reducer for managing authetication related code
export const authReducer=(
    state={
        user:null,
        loading:false,
        isAutheticated:false,
        data:{},
    },
    action
)=>{

    switch(action.type){
        case LOGIN_REQUEST:
            case REGISTER_USER_REQUEST:
                case LOAD_USER_REQUEST:
                    return{
                        ...state,
                        loading:true,
                        isAutheticated:false,
                    };
         case LOGIN_SUCCESS:
            case REGISTER_USER_SUCCESS:
                case LOAD_USER_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        isAutheticated:true,
                        user:action.payload,
                    };
                case LOGOUT_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        isAutheticated:false,
                        user:null,
                    };
                 case LOGIN_FAIL:
                    case REGISTER_USER_FAIL:
                        case  LOAD_USER_FAIL: 
                        return{
                            ...state,
                            loading:false,
                            isAutheticated:false,
                            user:null,
                            error:action.payload,
                        };
                        case LOGOUT_FAIL:
                            return{
                                ...state,
                                error:action.payload,
                            };

                        case CLEAR_ERRORS:
                            return{
                                ...state,
                                error:null,
                            };
        default:
            return state;
    }
};
export const userReducer=(state={},action)=>{
switch(action.type){
    case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        return{
            ...state,
            loading:true,
        };
        case UPDATE_PROFILE_SUCCESS:
            case UPDATE_PASSWORD_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated:action.payload,
            };
            case UPDATE_PROFILE_RESET:
                case UPDATE_PROFILE_REQUEST:
                return{
                    ...state,
                   
                    isUpdated:false,
                }; 
                case UPDATE_PROFILE_FAIL:
                    case UPDATE_PASSWORD_FAIL:
                    return{
                        ...state,
                       error:action.payload,
                        //isUpdated:false,
                    }; 
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                           error:null,
                            //isUpdated:false,
                        };     
            default:
                return state;
}
};
export const forgotPasswordReducer=(state={},action)=>{
    switch(action.type){
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
  case NEW_PASSWORD_SUCCESS:
    return{
        ...state,
        //loading:false,
        message: action.payload,
    };
    case FORGOT_PASSWORD_SUCCESS:
        return{
            ...state,
            loading:false,
            message:action.payload,
        };
case FORGOT_PASSWORD_FAIL:
    case NEW_PASSWORD_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload,
        };
    case CLEAR_ERRORS:
        return{
            ...state,
            error:null,
        };
        default:
        return state;
    }
};