import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const createRoutingMachine = () => {
  // Routing machine control
  const myRoute = L.Routing.control({
    waypoints: [],
    lineOptions: {
      styles: [{ color: "red", opacity: 1, weight: 2 }],
    },
    geocoder: L.Control.Geocoder.nominatim(),
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
  });

  // console.log(myRoute);

  return myRoute;
};

const DriverRoutingMachine = createControlComponent(createRoutingMachine);
export default DriverRoutingMachine;
