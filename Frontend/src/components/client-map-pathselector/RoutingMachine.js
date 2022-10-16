import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useSelector, useDispatch } from "react-redux";
import { getRouteData } from "../../redux/routingMachineSlice";
import OrderForm from "./OrderForm";
import "leaflet.locatecontrol";

const createRoutingMachine = () => {
  const map = useMap();
  const { clientLocation } = useSelector((state) => state.routingMachineData);
  const dispatch = useDispatch();

  // // ---------------------  Get Driver position --------------------------
  // const [position, setPosition] = useState(null);

  // useEffect(() => {
  //   map.locate().on("locationfound", function (e) {
  //     setPosition(e.latlng);
  //     map.flyTo(e.latlng, map.getZoom());
  //     //  const radius = e.accuracy;
  //     // const circle = L.circle(e.latlng, radius);
  //     const userMarker = L.marker(e.latlng)
  //       .bindPopup("You are here User !")
  //       .openPopup();
  //     // circle.addTo(map);
  //     userMarker.addTo(map);
  //   });
  // }, [map]);

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

  // retrieve route data when 'routesfound' event is fired: start (x,y), end (x,y), distance(m) and time(min)
  myRoute.on("routesfound", function (e) {
    let distance = (e.routes[0].summary.totalDistance / 1000).toFixed(3);
    let time = Math.round((e.routes[0].summary.totalTime % 3600) / 60).toFixed(
      2
    );
    let start_y = e.routes[0].waypoints[0].latLng.lat.toFixed(3);
    let start_x = e.routes[0].waypoints[0].latLng.lng.toFixed(3);
    let end_y = e.routes[0].waypoints[1].latLng.lat.toFixed(3);
    let end_x = e.routes[0].waypoints[1].latLng.lng.toFixed(3);

    // console.log(`distance in Kilometers: ${distance} km\n
    // time: ${time} min\n
    // start_x: ${start_x}\n
    // start_y: ${start_y}\n
    // end_x: ${end_x}\n
    // end_y: ${end_y}`);

    // dispatch route data to redux store
    dispatch(
      getRouteData({
        // id: Math.random(),
        // start: { start_y, start_x },
        // end: { end_y, end_x },
        start_y: start_y,
        start_x: start_x,
        end_y: end_y,
        end_x: end_x,
        pathDistance: distance,
        pathTime: time,
      })
    );
  });

  // Creating button when clicking on map
  function createButton(label, container) {
    var btn = L.DomUtil.create("button", "", container);
    btn.setAttribute("type", "button");
    btn.innerHTML = label;
    return btn;
  }

  // Adding points to the control
  map.on("click", function (e) {
    var container = L.DomUtil.create("div"),
      startBtn = createButton("Start from this location", container),
      destBtn = createButton("Go to this location", container);

    // Adding start point to control
    L.DomEvent.on(startBtn, "click", function () {
      myRoute.spliceWaypoints(0, 1, e.latlng);
      map.closePopup();
    });

    // Adding end point to control
    L.DomEvent.on(destBtn, "click", function () {
      myRoute.spliceWaypoints(myRoute.getWaypoints().length - 1, 1, e.latlng);
      map.closePopup();
    });

    L.popup().setContent(container).setLatLng(e.latlng).openOn(map);
  });

  // console.log(myRoute);

  return myRoute;
};

const RoutingMachine = createControlComponent(createRoutingMachine);
export default RoutingMachine;
