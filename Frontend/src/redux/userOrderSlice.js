import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const id = localStorage.getItem("id");
// const token = localStorage.getItem("auth-token");

// create the Thunk:
// export const fetchUserOrder = (id) =>
//   createAsyncThunk("users/fetchUserOrder", async () => {
//     const response = await axios.get(`/api/getUserOrders/${id}`);
//     return response.data;
//   });

// default state
const initialState = {
  userOrderList: [],
  createOrderList: [],
};

// slice
const OrderSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    getUserOrders: (state, action) => {
      state.userOrderList = [...state.userOrderList, action.payload];
    },
    createUserOrder: (state, action) => {
      state.createOrderList = [...state.createOrderList, action.payload];
    },
  },
});

// export actions and reducer
export const { getUserOrders, createUserOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
