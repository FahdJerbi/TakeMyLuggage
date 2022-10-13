import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// **************************************       Thunks       **********************
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

// ------------------------------------   delete user thunk   ---------------------
export const deleteUser = createAsyncThunk(
  "admin/deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/admin/deleteUser/${id}`);
      // console.log("thunk is working !");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// ------------------------------------   delete driver thunk   ---------------------
export const deleteDriver = createAsyncThunk(
  "admin/deleteDriver",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/admin/deleteDriver/${id}`);
      // console.log("thunk is working !");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// ------------------------------------   drivers Position thunk   ---------------------
// create the getAllUsers thunk
export const getDriversPosition = createAsyncThunk("admin/driversPosition", async () => {
  const response = await axios.get("/api/admin/getDrivers");
  return response.data.data;
});

// *************************************     ADMIN SLICE      *****************************
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
    // ------------------------------------------------------
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
    // ------------------------------------------------------
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
    // ------------------------------------------------------
    // deleteUser thunk
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.filter(
        (user) => user._id !== action.payload._id
      );
      // console.log("action payload:", action);
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
    },
    // -------------------  deleteDriver thunk
    [deleteDriver.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteDriver.fulfilled]: (state, action) => {
      state.loading = false;
      state.drivers = state.drivers.filter(
        (driver) => driver._id !== action.payload._id
      );
      // console.log("action payload:", action);
    },
    [deleteDriver.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { getAllOrders } = adminSlice.actions;

export default adminSlice.reducer;
