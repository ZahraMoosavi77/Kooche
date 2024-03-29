"use client";
import { FC, useMemo } from "react";
import L from "leaflet";
import { mapPopup } from "@/index";



const Marker: FC<MarkerProps> = ({ location, markerGroup }) => {
  const { game_location, games } = location;

  let markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl: "/images/map/map_marker.svg",
        iconSize: [32, 32],
      }),
    [],
  );

  if (!!game_location[0] && !!game_location[1]) {
    const newMarker = L.marker(game_location, { icon: markerIcon }).addTo(
      markerGroup,
    );

    const markerPopUp = L.popup().setContent(mapPopup(games));
    newMarker.bindPopup(markerPopUp);
  }
  return null;
};
export default Marker;
