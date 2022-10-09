import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// driver Availability thunk
// export const checkAvailability = createAsyncThunk(
//   "driver/availability",
//   async (id) => {
//     const response = await axios.put(`/api/driver/availability/${id}`, {
//       availability,
//     });
//     console.log('"Availability" thunk is working !');
//     console.log(response.data.data);
//     return response.data.data;
//   }
// );

export const checkAvailability = createAsyncThunk(
  "driver/availability",
  async ({ id, availability }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/api/driver/availability/${id}`,
        availability
      );
      console.log('"Availability" thunk is working !');
      console.log(response.data.data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// get Driver Location thunk   ******************************************
// export const getDriverLocation = createAsyncThunk(
//   "driver/location",
//   async ({ id, loc }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/api/driver/location/${id}`, loc);
//       console.log('"Driver Location" thunk is working !');
//       console.log(response.data.data);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const getDriverLocation = createAsyncThunk(
  "driver/location",
  async (id, loc) => {
    const response = await axios.put(`/api/driver/location/${id}`, loc);
    console.log('"Driver Location" thunk is working !');
    console.log(response.data);
    return response;
  }
);

// set default state
const initialState = {
  driverAvailability: [],
  driverLocation: [],
  loading: false,
};

//  create slice
export const driverSlice = createSlice({
  name: "driver",
  initialState,
  //   reducers: {},
  extraReducers: {
    // getAllOrders thunk
    [checkAvailability.pending]: (state, action) => {
      state.loading = true;
    },
    [checkAvailability.fulfilled]: (state, action) => {
      state.loading = false;
      state.driverAvailability = action.payload;
      // console.log(action.payload);
    },
    [checkAvailability.rejected]: (state, action) => {
      state.loading = false;
    },
    // ***********   getDriverLocation thunk   **********
    [getDriverLocation.pending]: (state, action) => {
      state.loading = true;
    },
    [getDriverLocation.fulfilled]: (state, action) => {
      state.loading = false;
      state.driverLocation = action.payload;
      // console.log(action.payload);
    },
    [getDriverLocation.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// exporting slice actions and reducer
// export const {} = driverSlice.actions;
export default driverSlice.reducer;
