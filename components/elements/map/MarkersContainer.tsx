import { useMap } from "react-leaflet";
import L from "leaflet";
import Marker from "@/components/elements/map/Marker";
import SetView from "@/components/elements/map/SetView";
import { useGetGamesData } from "@/hooks/useGetGamesData";

const MarkersContainer = () => {
  const displayLocations = useGetGamesData();
  const map = useMap();
  const markerGroup = L.featureGroup().addTo(map);
  markerGroup.clearLayers();
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  return (
    <>
      {displayLocations.map((game) => (
        <Marker key={game.id} game={game} markerGroup={markerGroup} />
      ))}
      {!displayLocations.length && (
        <div
          className={
            "w-full h-full z-[401] bg-gray-900 flex justify-center relative items-center opacity-60"
          }
        >
          <p className={"text-[2.5rem] text-gray-400 font-extrabold"}>
            بازی مورد نظر یافت نشد
          </p>
        </div>
      )}
      <SetView markerGroup={markerGroup} map={map}  />
    </>
  );
};

export default MarkersContainer;
