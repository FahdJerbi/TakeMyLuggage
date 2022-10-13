import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getDriverLocation } from "../../redux/driverSlice";
import axios from "axios";

const createRoutingMachine = () => {
  // get driver id
  const id = localStorage.getItem("id");

  // ---------------------  Get Driver position --------------------------
  const [position, setPosition] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  let latlng = [lat, lng];

  // console.log(latlng);

  // Leaflet Hook
  const map = useMap();

  // get d river location
  // const driverLc = () => {
  //   map.locate().on("locationfound", function (e) {
  //     setPosition(e.latlng);
  //     setLat(e.latlng.lat);
  //     setLng(e.latlng.lng);
  //     map.flyTo(e.latlng, map.getZoom());

  //     // add a marker with popup
  //     const driverMarker = L.marker(e.latlng)
  //       .bindPopup("You are here !")
  //       .openPopup();

  //     // add driver marker to map
  //     driverMarker.addTo(map);
  //   });
  // };

  // map.locate().on("locationfound", function (e) {
  //   setPosition(e.latlng);
  //   setLatitude(e.latlng.lat);
  //   setLongitude(e.latlng.lng);
  //   console.log(e.latlng.lng);

  //   // axios.put(`/api/driver/location/${id}`, {
  //   //   lat: latitude,
  //   //   lng: longitude,
  //   // });
  //   map.flyTo(e.latlng, map.getZoom());
  //   const driverMarker = L.marker(e.latlng)
  //     .bindPopup("You are here !")
  //     .openPopup();
  //   driverMarker.addTo(map);
  // });

  // useEffect(() => {
  //   driverLc();
  // }, [map]);


  
  // const [map, setMap] = useState(null);

  useEffect(() => {
    // if (!map) return;

    L.easyButton("fa-map-marker", () => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }).addTo(map);
  }, [map]);


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
