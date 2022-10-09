import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useDispatch, useSelector } from "react-redux";
import { getDriverLocation } from "../../redux/driverSlice";
import axios from "axios";

const createRoutingMachine = () => {
  // redux prep
  const dispatch = useDispatch();
  const { driverLocation } = useSelector((state) => state.driver);

  // get driver id
  const id = localStorage.getItem("id");

  // ---------------------  Get Driver position --------------------------
  const [position, setPosition] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Leaflet Hook
  const map = useMap();

  // get d river location
  const driverLc = async () => {
    // try {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      setLatitude(e.latlng.lat);
      setLongitude(e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());

      // add a marker with popup
      const driverMarker = L.marker(e.latlng)
        .bindPopup("You are here !")
        .openPopup();

      // add driver marker to map
      driverMarker.addTo(map);
    });

    dispatch(getDriverLocation(id, { lat: latitude, lng: longitude }));

    // axios
    // await axios
    //   .put(`/api/driver/location/${id}`, {
    //     lat: latitude,
    //     lng: longitude,
    //   })
    //   .then((res) => console.log(res.data.data))
    //   .catch((err) => console.log(err));

    // } catch (error) {
    //   if (error) throw error;
    //   console.log(error);
    // }
  };

  // map.locate().on("locationfound", function (e) {
  //   setPosition(e.latlng);
  //   setLatitude(e.latlng.lat);
  //   setLongitude(e.latlng.lng);
  //   console.log(e.latlng.lng);

  //   // dispatch(getDriverLocation(id, { lat: latitude, lng: longitude }));
  //   axios.put(`/api/driver/location/${id}`, {
  //     lat: latitude,
  //     lng: longitude,
  //   });
  //   map.flyTo(e.latlng, map.getZoom());
  //   //  const radius = e.accuracy;
  //   // const circle = L.circle(e.latlng, radius);
  //   const driverMarker = L.marker(e.latlng)
  //     .bindPopup("You are here !")
  //     .openPopup();
  //   // circle.addTo(map);
  //   driverMarker.addTo(map);
  // });

  useEffect(() => {
    driverLc();
  }, [map]);

  // console.log(id);

  console.log(position);

  console.log(latitude);
  console.log(longitude);

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
