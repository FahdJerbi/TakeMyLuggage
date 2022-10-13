import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
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
  const Map = useMap();

  useEffect(() => {
    axios.get("/api/admin/getDrivers").then((res) => setDrivers(res.data.data));
  }, [Map]);

  console.log("Drivers:", drivers);

  return (
    <div>
      {drivers?.map((d) => {
        return (
          <Marker key={d._id} position={d.location}>
            <Popup> {d.firstName} </Popup>
          </Marker>
        );
      })}
    </div>
  );
};

//   *****************************************

// const DriverPosition = createControlComponent(createRoutingMachine);
export default createRoutingMachine;
