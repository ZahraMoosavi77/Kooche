"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SetGameLocation from "./SetGameLocation";
import SetMapCenter from "./SetMapCenter";

const MapNewPage = ({ mapCenter }) => {
  const mapOptions = {
    center: [35.5834074, 53.3882906],
    zoom: 10,
    scrollWheelZoom: true,
    attributionControl: false,
  };
  return (
    <div className="rounded-xl w-full h-[300px]">
      <MapContainer {...mapOptions} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetGameLocation />
        <SetMapCenter mapCenter={mapCenter} />
      </MapContainer>
    </div>
  );
};

export default MapNewPage;
