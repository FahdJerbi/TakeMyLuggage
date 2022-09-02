import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import Navbar from "./Navbar";
import ClientPathSelector from "./ClientPathSelector";
import "./ClientMap.css";

const ClientMap = () => {
  const Tunisie = [33.88, 9.53];

  return (
    <div style={{ display: "flex" }}>
      {/* Navbar component */}
      {/* <Navbar /> */}

      {/* user inputs component */}
      <ClientPathSelector />

      {/* Map component */}
      <MapContainer center={Tunisie} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* leaflet routing machine component */}
        <RoutingMachine />
      </MapContainer>
    </div>
  );
};

export default ClientMap;
