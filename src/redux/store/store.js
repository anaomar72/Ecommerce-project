import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cart"
// import cart from "../reducer/cart";
const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default store