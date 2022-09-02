import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const createRoutingMachine = () => {
  const map = useMap();

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

const AdminRoutingMachine = createControlComponent(createRoutingMachine);
export default AdminRoutingMachine;
