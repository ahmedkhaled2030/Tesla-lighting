import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // //console.log(action.payload )
      const size = action.payload.size[action.payload.itemSize].value;
      // //console.log(size)
      const product = {
        _id: action.payload._id,
        size: size,
        color: action.payload.color,
        price: action.payload.price,
        quantity: action.payload.quantity,
        title: action.payload.title,
        // image: action.payload.images[0],
        img: "/img/arrival1.png",
      };

      const index = state.products.findIndex(
        (item) => item._id === product._id && item.size === product.size
      );

      if (index !== -1) {
        state.products[index].quantity += action.payload.quantity;

        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.products.push(product);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      }

      // state.products.push(product);
      // state.quantity += 1;
      // state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    addCart: (state, action) => {
      //console.log(action.payload);
      const index = state.products.findIndex(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      //console.log(index);
      if (index !== -1) {
        //console.log("first");
        state.products[index].quantity += 1;
        state.total += state.products[index].price;
      }
    },

    removeCart: (state, action) => {
      //console.log(action.payload);
      const index = state.products.findIndex(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );

      if (index !== -1) {
        //console.log("first");
        state.products[index].quantity -= 1;
        state.total -= state.products[index].price;
      }
    },
    removeBulk: (state, action) => {
      const index = state.products.findIndex(
        (item) =>
          item._id === action.payload._id && item.size === action.payload.size
      );
      if (index > -1) {
        state.products.splice(index, 1); // 2nd parameter means remove one item only

        state.quantity -= 1;
        state.total -= action.payload.price;
      }
    },
  },
});

export const { addProduct, reset, addCart, removeCart, removeBulk } =
  cartSlice.actions;
export default cartSlice.reducer;
