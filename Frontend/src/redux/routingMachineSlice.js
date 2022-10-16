import { createSlice } from "@reduxjs/toolkit";

// set default state
const initialState = {
  userPaths: [],
  clientLocation: [],
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
    },
    // get client location from "LocateClient" control
    getClientLocation: (state, action) => {
      state.clientLocation = [...state.userPaths, action.payload];
    },
  },
});

// exporting slice actions and reducer
export const { getRouteData, getClientLocation } = routingMachineSlice.actions;
export default routingMachineSlice.reducer;
