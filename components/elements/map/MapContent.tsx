"use client";
import "@/styles/map/map.modules.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkersContainer from "@/components/elements/map/MarkersContainer";

const CENTER: number[] = [35.68804331563681, 51.38883302970867];

const MapContent = () => {
  return (
    <div className={"w-full h-full"}>
      <MapContainer
        className={"relative h-full"}
        center={CENTER}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkersContainer />
      </MapContainer>
    </div>
  );
};

export default MapContent;
