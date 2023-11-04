import { useContext, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { LocationContext, UserSearchContext } from "@/context/map/mapContext";
import Marker from "@/components/elements/map/Marker";
import SetView from "@/components/elements/map/SetView";
import { supabase } from "@/lib/supabase";

const MarkersContainer = () => {
  const userLocation = useContext(LocationContext);
  const userSearch = useContext(UserSearchContext);
  const [locations, setLocations] = useState([]);
  const [displayLocations, setDisplayLocations] = useState([]);

  const map = useMap();
  const markerGroup = L.featureGroup().addTo(map);

  markerGroup.clearLayers();
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("locations")
        .select(
          `
        id,game_location,
        games!inner(
        exchange,preferedExchange,name,price,
        platforms(name),
        categories(name),
        cities!inner(name,bounds,center),
        status(name)
        )
        `,
        )
        .eq(
          "games.cities.name",
          JSON.parse(localStorage.getItem("userLocation")).cityName,
        );

      setLocations(data);
    };

    fetchData();
  }, [userLocation]);

  useEffect(() => {
    if (locations.length) {
      const { gameNameTerm, platformsTerm, isForExchange, isForSell } =
        JSON.parse(userSearch);

      const selectedPlatforms = Object.keys(platformsTerm).filter(
        (key) => platformsTerm[key] === true,
      );
      // console.log(
      //   selectedPlatforms,
      //   platformsTerm,
      //   isForExchange,
      //   isForSell,
      //   locations[4].games[0].name.toLowerCase(),
      //   selectedPlatforms.filter((platform) =>
      //     platform.includes(locations[1].games[0].platforms.name),
      //   ),
      // );

      const newLocations = locations.filter(({ games }) => {
        if (!!selectedPlatforms.length) {
          if (isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!parseInt(games[0].price) === isForSell &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name),
              ).length
            );
          } else if (isForSell && !isForExchange) {
            return (
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!parseInt(games[0].price) === isForSell &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name),
              ).length
            );
          } else if (!isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name),
              ).length
            );
          } else {
            return (
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name),
              ).length
            );
          }
        } else {
          if (isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!parseInt(games[0].price) === isForSell
            );
          } else if (isForSell && !isForExchange) {
            return (
              games[0].name.toLowerCase().includes(gameNameTerm) &&
              !!parseInt(games[0].price) === isForSell
            );
          } else if (!isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameNameTerm)
            );
          } else {
            return games[0].name.toLowerCase().includes(gameNameTerm);
          }
        }
      });

      setDisplayLocations(newLocations);
    }
  }, [locations, userSearch]);

  return (
    <>
      {displayLocations.map((game) => (
        <Marker key={game.id} game={game} markerGroup={markerGroup} />
      ))}
      {!displayLocations.length && (
        <div
          className={
            "w-full h-full z-[990] bg-gray-900 flex justify-center relative items-center opacity-60"
          }
        >
          <p className={"text-[2.5rem] text-gray-400 font-extrabold"}>
            بازی مورد نظر یافت نشد
          </p>
        </div>
      )}
      <SetView markerGroup={markerGroup} map={map} />
    </>
  );
};

export default MarkersContainer;
