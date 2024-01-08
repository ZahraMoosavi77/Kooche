"use client";
import L from "leaflet";
import React, { useMemo } from "react";
import { mapPopup } from "@/index";

interface MarkerProps {
  game: {
    game_location: [number, number];
    games: [];
  };
  markerGroup: L.LayerGroup;
}

const Marker: React.FC<MarkerProps> = ({ game, markerGroup }) => {
  const { game_location, games } = game;

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
