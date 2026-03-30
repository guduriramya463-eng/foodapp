import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import couponReducer from "./CouponSlice";  

const store = configureStore({
  reducer: {
    cart: cartReducer,
    coupon:couponReducer
  }
});

export default store;