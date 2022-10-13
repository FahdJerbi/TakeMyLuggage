import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import axios from "axios";
// --------------------------------------------
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
// --------------------------------------------

// const createRoutingMachine = () => {
//   // get driver id

//   // ---------------------  Get Driver position --------------------------
//   const [position, setPosition] = useState(null);

//   // Leaflet Hook
//   const map = useMap();

//   let lc = L.easyButton("fa-map-marker", () => {
//     map.locate().on("locationfound", function (e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//       // add a marker with popup

//       // add driver marker to map
//       L.marker(e.latlng).addTo(map).bindPopup("You are here !").openPopup();

//       console.log("Driver location is working !");
//     });
//   }).addTo(map);

//   //   useEffect(() => {
//   // L.easyButton("fa-map-marker", () => {
//   //   map.locate().on("locationfound", function (e) {
//   //     setPosition(e.latlng);
//   //     map.flyTo(e.latlng, map.getZoom());
//   //     // add a marker with popup
//   //     // add driver marker to map
//   //     L.marker(e.latlng).addTo(map).bindPopup("You are here !").openPopup();
//   //     console.log("Driver location is working !");
//   //   });
//   // }).addTo(map);
//   //   }, [map]);

//   // *****************************     Leaflet Routing Machine    ***********************

//   // Routing machine control
//   const myRoute = L.Routing.control({
//     waypoints: [],
//     lineOptions: {
//       styles: [{ color: "red", opacity: 1, weight: 2 }],
//     },
//     geocoder: L.Control.Geocoder.nominatim(),
//     addWaypoints: false,
//     routeWhileDragging: true,
//     draggableWaypoints: true,
//     fitSelectedRoutes: true,
//   });

//   return lc;
// };

// ********************************************  it works !!  **************

const createRoutingMachine = () => {
  const [position, setPosition] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  //   console.log(position);
  //   console.log(position.lat);

  //   redux
  // const { driverLocation } = useSelector((state) => state.driver);
  // const dispatch = useDispatch();

  // **************************** redux: end  *****

  const id = localStorage.getItem("id");

  // Leaflet Hook
  const map = useMap();

  const pos = [lat, lng];
  console.log(pos);

  useEffect(() => {
    axios
      .put(`/api/driver/location/${id}`, { lat, lng })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, [position]); // dependency should be map or position ??

  let driverLc = L.easyButton("fa-map-marker", () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);

      map.flyTo(e.latlng, map.getZoom());

      // add driver marker to map
      L.marker(e.latlng).addTo(map).bindPopup("You are here !").openPopup();
    });
  });

  return driverLc;
};

//   *****************************************

const LocateCtrl = createControlComponent(createRoutingMachine);
export default LocateCtrl;
