import axios from "axios";
import {ALL_RESTAURANTS_REQUEST} from "../constants/restaurantConstant";
import {ALL_RESTAURANTS_SUCCESS} from "../constants/restaurantConstant";
import {ALL_RESTAURANTS_FAIL} from "../constants/restaurantConstant";
import {SORT_BY_RATINGS} from "../constants/restaurantConstant";
import {SORT_BY_REVIEWS} from "../constants/restaurantConstant";
import {TOGGLE_VEG_ONLY} from "../constants/restaurantConstant";
import {CLEAR_ERROR} from "../constants/restaurantConstant";
export const getRestaurants=()=>{
    return async(dispatch)=>{
        try{
    dispatch({type:ALL_RESTAURANTS_REQUEST});
    let link=`/api/v1/eats/stores`;
    const {data}=await axios.get(link);
    console.log(data);
    const {restaurants,count}=data;
    dispatch({
        type: ALL_RESTAURANTS_SUCCESS,
        payload:{restaurants,count}
    });
}catch(err){
    dispatch({
type:ALL_RESTAURANTS_FAIL,
payload:err.response && err.response.data.message
? err.response.data.message
:err.message,
});
}
    };
};
export const sortByRatings=()=>{
    return{
        type:SORT_BY_RATINGS,
    };
};
export const sortByReviews=()=>{
    return{
        type:SORT_BY_REVIEWS,
    };
};
export const toggleVegOnly=()=>{
    return{
        type:TOGGLE_VEG_ONLY,
    };
};
export const clearErrors=()=>{
    return{
        type:CLEAR_ERROR,
    };
};