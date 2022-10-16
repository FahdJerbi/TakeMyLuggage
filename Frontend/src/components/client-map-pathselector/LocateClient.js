import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet.locatecontrol";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getClientLocation } from "../../redux/routingMachineSlice";

const createRoutingMachine = () => {
  //   import Leaflet useMap hook:
  const map = useMap();
  const dispatch = useDispatch();
  const { clientLocation } = useSelector((state) => state.routingMachineData);

    // console.log("clientLocation:", clientLocation);

  //   get driver id from local storage
  const id = localStorage.getItem("id");

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const position = [lat, lng];

  //   useEffect(() => {
  //     if (lat && lng) {
  //       dispatch(getClientLocation(position));
  //     }
  //   }, [position]);

  //   console.log("position:", position);

  // ******************************    Leaflet LocateControl: Start  *************************
  //   add locate control to the map
  const locate = L.control.locate();

  //   get the coordinate (lat,lng) using  Leaflet "locationfound" event
  const getCoordinates = map.on("locationfound", (e) => {
    setLat(e.latitude);
    setLng(e.longitude);
    if (lat && lng) {
      dispatch(getClientLocation(position));
    }
    // dispatch(getClientLocation(position));
    // console.log("latitude:", e.latitude, "longitude:", e.longitude);
  });

  // ******************************    Leaflet LocateControl: End  *************************

  return locate;
};

//   *****************************************

const LocateClient = createControlComponent(createRoutingMachine);
export default LocateClient;
