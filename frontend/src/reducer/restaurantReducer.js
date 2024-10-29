import { ALL_RESTAURANTS_FAIL, ALL_RESTAURANTS_REQUEST } from "../constants/restaurantConstant";
import { ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";
import {SORT_BY_RATINGS} from "../constants/restaurantConstant";
import {SORT_BY_REVIEWS} from "../constants/restaurantConstant";
import {TOGGLE_VEG_ONLY} from "../constants/restaurantConstant";
import {CLEAR_ERROR} from "../constants/restaurantConstant";
const intialState={
    restaurants:[],
};
export const restaurantReducer=(state=intialState,action)=>{
    switch(action.type){
        case ALL_RESTAURANTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading:false,
                count:action.payload.count,
                restaurants:action.payload.restaurants,

            };
        //break;
        case ALL_RESTAURANTS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        case SORT_BY_RATINGS:
            return{
                ...state,
                restaurants:[...state.restaurants].sort(
                    (a,b)=>b.ratings-a.ratings
                ),
            };
            case SORT_BY_REVIEWS:
                return{
                    ...state,
                    restaurants:[...state.restaurants].sort(
                        (a,b)=>b.NumOfReviews-a.NumOfReviews
                    ),
                };
            case TOGGLE_VEG_ONLY:
                return{
                    ...state,
                    showVegOnly:!state.showVegOnly,
                    pureVegRestaurantsCount:calculatePureVegCount(
                        state.restaurants,
                        !state.showVegOnly,
                    ),
                };
            case CLEAR_ERROR:
                return {
                    ...state,
                    error:null,
                };
        default:
            return state;
            //break;
    }

};
const calculatePureVegCount=(restaurants,showVegOnly)=>{
    if(!showVegOnly){
      return  restaurants.length;
    } else{
        return restaurants.filter((restaurant)=>
        restaurant.isVeg).length;
    }
};