import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AdminRoutingMachine from "./AdminRoutingMachine";
// import ClientPathSelector from "./ClientPathSelector";
import "./AdminMap.css";

const AdminMap = () => {
  const Tunisie = [34.0, 9.53];

  return (
    <div style={{ display: "flex" }}>
      {/* Navbar component */}
      {/* <Navbar /> */}

      {/* user inputs component */}
      {/* <ClientPathSelector /> */}

      {/* Map component */}
      <MapContainer center={Tunisie} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* leaflet routing machine component */}
        {/* <RoutingMachine /> */}
      </MapContainer>
    </div>
  );
};

export default AdminMap;
