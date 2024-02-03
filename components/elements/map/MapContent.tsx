"use client";
import "@/styles/map/map.modules.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { MarkersContainer } from "@/index";
import dynamic from "next/dynamic";
const MarkersContainer = dynamic(
  () => import("@/components/elements/map/MarkersContainer"),
  {
    ssr: false, // Disable server-side rendering for Leaflet component
  },
);

const mapOptions = {
  center: [35.68804331563681, 51.38883302970867],
  zoom: 10,
  scrollWheelZoom: true,
};
const MapContent = () => {
  return (
    <div className={"w-full h-full"}>
      <MapContainer
        className={"relative h-full flex justify-center items-start"}
        {...mapOptions}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkersContainer />
      </MapContainer>
    </div>
  );
};

export default MapContent;
