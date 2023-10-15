"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkersContainer from "@/components/elements/map/MarkersContainer";


const CENTER = [35.68804331563681, 51.38883302970867];

const MapContent = () => {
  return (
    <div className={"w-full h-full flex justify-center items-center"}>
      <MapContainer
        className={"w-full h-5/6 rounded-xl"}
        center={CENTER}
        zoom={10}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkersContainer />
      </MapContainer>
    </div>
  );
};

export default MapContent;
