import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const createRoutingMachine = () => {
  // ---------------------  Get Driver position --------------------------
  const [position, setPosition] = useState(null);

  // Leaflet Hook
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      //  const radius = e.accuracy;
      // const circle = L.circle(e.latlng, radius);
      const driverMarker = L.marker(e.latlng)
        .bindPopup("You are here !")
        .openPopup();
      // circle.addTo(map);
      driverMarker.addTo(map);
    });
  }, [map]);

  console.log(position);

  // *****************************     Leaflet Routing Machine    ***********************

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

const DriverLocation = createControlComponent(createRoutingMachine);
export default DriverLocation;
