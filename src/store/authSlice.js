import { createSlice } from "@reduxjs/toolkit";

// for authentication tracting we ask stor for user is authenticate or not

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // Reducer me jo bhi hoty hain unki pass state or payload action ka access hota hai
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// reducers me login and logout actions hain me unko ko export kr rha hn authSlice.actions actions unko bolty hain

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
