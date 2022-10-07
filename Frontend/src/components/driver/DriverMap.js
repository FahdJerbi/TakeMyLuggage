import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DriverRoutingMachine from "./DriverRoutingMachine";
import DriverSideBar from "./DriverSideBar";
import "./DriverMap.css";
import SwitcherContainer from "./SwitcherContainer";
import DriverLocation from "./DriverLocation";

const DriverMap = () => {
  const Tunisie = [33.88, 9.53];

  return (
    <div style={{ display: "flex" }}>
      {/* user inputs component */}
      <DriverSideBar />

      {/* Map component */}
      <div
      // style={{ border: "5px solid pink" }}
      >
        <SwitcherContainer />

        <MapContainer
          center={Tunisie}
          zoom={7}
          style={{
            position: "fixed",
            // zIndex: "50",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* leaflet routing machine component */}
          {/* <DriverRoutingMachine /> */}
          <DriverLocation />
        </MapContainer>
      </div>
    </div>
  );
};

export default DriverMap;
