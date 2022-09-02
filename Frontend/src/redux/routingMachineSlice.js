import { createSlice } from "@reduxjs/toolkit";

// set default state
const initialState = {
  userPaths: []
};

//  create slice
export const routingMachineSlice = createSlice({
  name: "routingMachineData",
  initialState,
  reducers: {
    // action to capture routes data from 'Leaflet Routing Machine' API
    getRouteData: (state, action) => {
      // let { userPaths } = state;
      state.userPaths = [...state.userPaths, action.payload];
    }
  }
});

// exporting slice actions and reducer
export const { getRouteData } = routingMachineSlice.actions;
export default routingMachineSlice.reducer;
