import L from "leaflet";
import {mapPopup} from "@/utils/map/mapPopup";


const Marker = ({ game, markerGroup }) => {
  const { games, loc } = game;

  let markerIcon = L.icon({
    iconUrl: "map/marker_icon_red2.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  const newMarker = L.marker(loc, { icon: markerIcon }).addTo(markerGroup);

  const test = mapPopup(games);

  newMarker.bindPopup(`${test}`);

  newMarker.on("mouseover", function (e) {
    this.openPopup();
  });

  return null;
};

export default Marker;
