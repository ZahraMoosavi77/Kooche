import L from "leaflet";
import { mapPopup } from "@/utils/map/mapPopup";
import { useMemo } from "react";

const Marker = ({ game, markerGroup }) => {
  const { game_location, games } = game;

  let markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl: "/images/map/map_marker.svg",
        iconSize: [32, 32],
      }),
    []
  );

  const newMarker = useMemo(
    () => L.marker(game_location, { icon: markerIcon }).addTo(markerGroup),
    [game_location, markerGroup, markerIcon]
  );

  const markerPopUp = L.popup().setContent(mapPopup(games));

  newMarker.bindPopup(markerPopUp);

  return null;
};

export default Marker;
