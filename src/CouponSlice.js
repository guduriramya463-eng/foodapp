import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  applied: false,
  discount: 0,
  message: ""
};

const CouponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {

    applyCoupon: (state, action) => {
      const enteredCode = action.payload.toUpperCase();

      if (enteredCode === "SAVE10") {
        state.code = enteredCode;
        state.applied = true;
        state.discount = 10;
        state.message = "Coupon applied successfully!";
      } 
      else if (enteredCode === "SAVE20") {
        state.code = enteredCode;
        state.applied = true;
        state.discount = 20;
        state.message = "Coupon applied successfully!";
      } 
      else {
        state.code = "";
        state.applied = false;
        state.discount = 0;
        state.message = "Invalid coupon code!";
      }
    },

    resetCoupon: (state) => {
      state.code = "";
      state.applied = false;
      state.discount = 0;
      state.message = "";
    }

  }
});

export const { applyCoupon, resetCoupon } = CouponSlice.actions;
export default CouponSlice.reducer;