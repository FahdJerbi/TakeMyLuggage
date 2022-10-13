// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// // import RoutingMachine from "./RoutingMachine";
// // import ClientPathSelector from "./ClientPathSelector";
// // import "./ClientMap.css";
// import { useSelector, useDispatch } from "react-redux";
// import { getDriversPosition } from "../../redux/userOrderSlice";

// const DriverPosition = ({ _id, firstName, lat, lng }) => {
//   const map = useMap();

//   let Tunisie = [33.88, 9.53];

//   console.log(firstName, lat, lng);

//   return (
//     <div>
//       {
//         <Marker key={_id} position={Tunisie} p>
//           <Popup>{firstName}</Popup>
//         </Marker>
//       }
//     </div>
//   );
// };

// export default DriverPosition;
// ****************************************************************

import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getActiveDrivers } from "../../redux/userOrderSlice";
// --------------------------------------------
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
// --------------------------------------------

const createRoutingMachine = () => {
  const [drivers, setDrivers] = useState();

  // Leaflet Hook
  const map = useMap();

  //   redux
  const { activeDrivers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getActiveDrivers());

    axios.get("/api/admin/getDrivers").then((res) => setDrivers(res.data.data));
    console.log("activeDrivers:", drivers);
  }, [map]);
  // **************************** redux: end  *****

  const DrMarker = (
    <Marker
      // key={driver._id}
      position={[33.88, 9.53]}
    >
      <Popup> Fahd </Popup>
    </Marker>
  );

  // activeDrivers.map((driver) => {
  //   <Marker key={driver._id} position={[33.88, 9.53]}>
  //     <Popup> {driver.firstName} </Popup>
  //   </Marker>;
  // });

  // let driverLc = L.easyButton("fa-map-marker", () => {
  //   map.locate().on("locationfound", function (e) {
  //     setPosition(e.latlng);

  //     map.flyTo(e.latlng, map.getZoom());

  //     // add driver marker to map
  //     L.marker(e.latlng).addTo(map).bindPopup("You are here !").openPopup();
  //   });
  // });

  return DrMarker;

  // <Marker
  //   // key={driver._id}
  //   position={[33.88, 9.53]}
  // >
  //   <Popup> Fahd </Popup>
  // </Marker>
};

//   *****************************************

// const DriverPosition = createControlComponent(createRoutingMachine);
export default createRoutingMachine;
