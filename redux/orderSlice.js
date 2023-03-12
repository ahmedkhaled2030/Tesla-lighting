import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    clientSecret: null,
    tax: null,
    shippingCost: null,
    price: null,
    discount: null,
  },
  reducers: {
    makingOrder: (state, action) => {
      //console.log(action.payload);
      state.clientSecret = action.payload.clientSecret;
      state.tax = action.payload.tax;
      state.shippingCost = action.payload.shippingCost;
      state.price = action.payload.price;
      state.discount = action.payload.discount;
    },
  },
});

export const { makingOrder } = orderSlice.actions;
export default orderSlice.reducer;
