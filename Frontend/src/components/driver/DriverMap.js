import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DriverRoutingMachine from "./DriverRoutingMachine";
import DriverSideBar from "./DriverSideBar";
import "./DriverMap.css";
import SwitcherContainer from "./SwitcherContainer";

const DriverMap = () => {
  const Tunisie = [33.88, 9.53];

  return (
    <div style={{ display: "flex" }}>
      {/* user inputs component */}
      <DriverSideBar />

      {/* Map component */}
      <MapContainer center={Tunisie} zoom={7}>
        {/* <SwitcherContainer /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* leaflet routing machine component */}
        <DriverRoutingMachine />
      </MapContainer>
    </div>
  );
};

export default DriverMap;
