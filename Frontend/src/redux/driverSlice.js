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

// set default state
const initialState = {
  driverAvailability: [],
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
  },
});

// exporting slice actions and reducer
// export const {} = driverSlice.actions;
export default driverSlice.reducer;
