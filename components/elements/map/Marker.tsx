import L from "leaflet";
import { mapPopup } from "@/utils/map/mapPopup";

const Marker = ({ game, markerGroup }) => {
  const { game_location, games } = game;
  // console.log(games);

  let markerIcon = L.icon({
    iconUrl: "/images/map/map_marker.svg",
    iconSize: [32, 32],
  });

  const newMarker = L.marker(game_location, { icon: markerIcon }).addTo(
    markerGroup,
  );

  const test = L.popup().setContent(mapPopup(games));

  newMarker.bindPopup(test);

  // newMarker.on("mouseover", function (e) {
  //   newMarker.openPopup();
  // });
  //
  // newMarker.on("click", function (e) {
  //   this.openPopup();
  //   setIsClicked(true);
  // });
  //
  // {
  //   !isClicked &&
  //     newMarker.on("mouseout", function (e) {
  //       this.closePopup();
  //     });
  // }

  return null;
};

export default Marker;
