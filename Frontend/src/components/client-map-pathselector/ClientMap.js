import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import ClientPathSelector from "./ClientPathSelector";
import "./ClientMap.css";
import DriverPosition from "./DriverPosition";

const ClientMap = () => {
  const Tunisie = [33.88, 9.53];

  return (
    <div style={{ display: "flex" }}>
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

        <DriverPosition />
      </MapContainer>
    </div>
  );
};

export default ClientMap;
