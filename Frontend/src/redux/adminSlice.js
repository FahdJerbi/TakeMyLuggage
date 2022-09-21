import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create the getAllOrders thunk
export const getAllOrders = createAsyncThunk("admin/getOrders", async () => {
  const response = await axios.get("/api/admin/getOrders");
  return response.data.data;
});

// create the getAllUsers thunk
export const getAllUsers = createAsyncThunk("admin/getUsers", async () => {
  const response = await axios.get("/api/admin/getUsers");
  return response.data.data;
});

// create the getAllUsers thunk
export const getAllDrivers = createAsyncThunk("admin/getDrivers", async () => {
  const response = await axios.get("/api/admin/getDrivers");
  return response.data.data;
});

// export const getAllOrders = createAsyncThunk("admin/getOrders", async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// });

const initialState = {
  orders: [],
  users: [],
  drivers: [],
  loading: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    // getAllOrders thunk
    [getAllOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [getAllOrders.rejected]: (state, action) => {
      state.loading = false;
    },

    // getAllUsers thunk
    [getAllUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
    },

    // getAllDrivers thunk
    [getAllDrivers.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllDrivers.fulfilled]: (state, action) => {
      state.loading = false;
      state.drivers = action.payload;
    },
    [getAllDrivers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { getAllOrders } = adminSlice.actions;

export default adminSlice.reducer;
