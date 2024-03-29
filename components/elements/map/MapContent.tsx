"use client";
import { FC, useEffect, useContext } from "react";
import { ActionUserSearchContext } from "@/index";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "@/styles/map/map.modules.css";
import dynamic from "next/dynamic";
const MarkersContainer = dynamic(() => import("@/components/elements/map/MarkersContainer"), {
    ssr: false, // Disable server-side rendering for Leaflet component
});

const mapOptions = {
  center: [35.68804331563681, 51.38883302970867] as LatLngExpression,
  zoom: 10,
  scrollWheelZoom: true,
};

const MapContent: FC = () => {
  const setSearchTerms = useContext(ActionUserSearchContext);

  useEffect(() => {
    setSearchTerms({
      gameNameTerm: "",
      platformsTerm: {},
      isForSell: false,
      isForExchange: false,
    });
  }, []);
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
