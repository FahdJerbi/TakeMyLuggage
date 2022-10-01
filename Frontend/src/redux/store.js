import { configureStore } from "@reduxjs/toolkit";
import routingMachineReducer from "./routingMachineSlice";
import adminSlice from "./adminSlice";
import OrderSlice from "./userOrderSlice";

export const store = configureStore({
  reducer: {
    routingMachineData: routingMachineReducer, //get data from LRM Api
    admin: adminSlice, //test
    user: OrderSlice,
  },
});
