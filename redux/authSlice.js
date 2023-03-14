import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    _id: null,
    email: null,
    firstName: null,
    lastName: null,
    role:null
  },
  reducers: {
    authLogin: (state, action) => {
  console.log(action.payload); 
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
    },
    signOut: (state) => {
      state._id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;      
      state.role = null;
    },
  },
});

export const { authLogin, signOut } = authSlice.actions;
export default authSlice.reducer;
