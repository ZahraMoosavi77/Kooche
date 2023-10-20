import { useContext, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { MarkerContext } from "@/context/map/mapContext";
import Marker from "@/components/elements/map/Marker";
// import SetView from "@/components/elements/map/SetView";

const MarkersContainer = () => {
  const game_list = useContext(MarkerContext);
  const [games, setGames] = useState(game_list);
  const map = useMap();
  const markerGroup = L.featureGroup().addTo(map);

  useEffect(() => {
    setGames(game_list);
  }, [game_list]);

  markerGroup.clearLayers();
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  return (
    <div className={"w-full h-full"}>
      {games.map((game) => (
        <Marker key={game.id} game={game} markerGroup={markerGroup} />
      ))}
      {/*{!games.length && (*/}
      {/*    <div*/}
      {/*    className={*/}
      {/*      "w-full h-full z-[9999] bg-black flex justify-center relative items-center opacity-60"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <p className={"text-[2.5rem] font-extrabold"}>*/}
      {/*      بازی مورد نظر یافت نشد*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<SetView markerGroup={markerGroup} map={map} />*/}
    </div>
  );
};

export default MarkersContainer;
