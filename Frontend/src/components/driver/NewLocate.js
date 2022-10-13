import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet.locatecontrol";
import axios from "axios";

const createRoutingMachine = () => {
  //   import Leaflet useMap hook:
  const map = useMap();

  //   get driver id from local storage
  const id = localStorage.getItem("id");

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const position = [lat, lng];

  useEffect(() => {
    if (!position) {
      return null;
    } else {
      axios
        .put(`/api/driver/location/${id}`, { location: position })
        .then((res) => console.log(res.data.data))
        .catch((err) => console.log(err));
    }
  }, [position]);

  console.log(position);

  //   add locate control to the map
  const locateDriver = L.control.locate();

  //   get the coordinate (lat,lng) using  Leaflet "locationfound" event
  const l = map.on("locationfound", (e) => {
    setLat(e.latitude);
    setLng(e.longitude);
    // console.log("latitude:", e.latitude, "longitude:", e.longitude);
  });

  //   console.log(l);

  return locateDriver;
};

//   *****************************************

const NewLocate = createControlComponent(createRoutingMachine);
export default NewLocate;
