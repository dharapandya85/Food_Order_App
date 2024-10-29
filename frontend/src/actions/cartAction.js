import axios from "axios";
import {FETCH_CART} from "../constants/cartConstant";
import { ADD_TO_CART,REMOVE_ITEM_CART, UPDATE_CART_ITEM } from "../components/cart/cartConstant";



export const fetchCartItems=(alert)=>async(dispatch)=>{
try{

    const response=await axios.get("/api/v1eats/cart/gets-cart");
    dispatch({
        type:FETCH_CART,
        payload:response.data.data,
    });
} catch(error){
    console.error("Fetch cart error:",error);
    if(alert){
      alert.info("Cart is hungry");  
    }
}
};
//add to Cart
export const addItemToCart=
(foodItemId,restaurant,quantity,alert)=>async(dispatch,getState)=>{
try{
const {user}=getState().auth; //return the current store true
const {response}=await axios.post("/api/v1/eats/cart/add-to-cart",{
userId:user._id,
foodItemId,
restaurantId:restaurant,
quantity,

});
console.log(response.data);
if(response.data.cart){
alert.success("Item added to cart",response.data.cart);
dispatch({
    type:ADD_TO_CART,
    payload:response.data.cart,
});
} else{
throw new Error("Cart data is  missing")
}
}
catch(error){
    alert.error(error.response?error.response.data.message:error.message);
}
};
//Update cart Item quantity
export const updateCartQuantity=(foodItemId,quantity,alert)=>async(dispatch,getState)=>{
    try{
        const {user}=getState().auth;
        if(typeof foodItemId ==="object"){
            foodItemId=foodItemId._id;
        }
        const response= await axios.post("/api/v1/eats/cart/update-cart-item",{
            userId:user._id,
            foodItemId,
            quantity,
        });
        dispatch({
            type:UPDATE_CART_ITEM,
            payload:response.data.cart,
        })

    } catch(error){
        alert.error(error.response?error.response.data.message:error.message);
    }
};
//remove item from cart
export const removeItemFromCart=(foodItemId)=>async(dispatch,getState)=>{
    try{
        const {user}=getState().auth;

        if(typeof foodItemId==="object"){
            foodItemId=foodItemId._id;
        }
        const response=await axios.delete("/api/v1/eats/cart/delete-cart-item",
            {
                data:{userId:user._id,foodItemId},
            }
        );
        dispatch({
            type:REMOVE_ITEM_CART,
            payload:response.data,
        });
    
    } catch(error){
        alert.error(error.response?error.response.data.message:error.message);
    }
};
