import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const id = localStorage.getItem("id");
// const token = localStorage.getItem("auth-token");

// create the Thunk:
export const userOrders = createAsyncThunk("user/getUserOrders", async (id) => {
  const response = await axios.get(`api/getUserOrders/${id}`);
  console.log("thunk response:", response.data.UserOrders);
  return response.data.UserOrders;
});

// default state
const initialState = {
  userOrderList: [],
  createOrderList: [],
  allOrders: [],
  loading: false,
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
  extraReducers: {
    [userOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [userOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.allOrders = action.payload;
    },
    [userOrders.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export actions and reducer
export const { getUserOrders, createUserOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
