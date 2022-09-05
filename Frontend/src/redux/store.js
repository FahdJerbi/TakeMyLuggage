import { configureStore } from "@reduxjs/toolkit";
import routingMachineReducer from "./routingMachineSlice";

export const store = configureStore({
  reducer: {
    routingMachineData: routingMachineReducer, //get data from LRM Api
  },
});
