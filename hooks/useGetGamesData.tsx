"use client";
import { useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LocationContext, UserSearchContext } from "@/context/map/mapContext";

export function useGetGamesData(gameNameSearch: string = "") {
  const userLocation = useContext(LocationContext);
  const userSearch = useContext(UserSearchContext);
  const [locations, setLocations] = useState<Location[] | any[]>([]);
  const [displayLocations, setDisplayLocations] = useState<Location[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase
        .from("locations")
        .select(
          `
        id,game_location,
        games!inner(
        exchange,preferedExchange,name,price,imageUrl,
        platforms(name),
        categories(name),
        cities!inner(name),
        status(name)
        )
        `
        )
        .eq(
          "games.cities.name",
          JSON.parse(localStorage.getItem("userLocation")!).cityName
        );

      setLocations(data);
      setIsLoading(false);
    };

    fetchData();
  }, [userLocation]);

  useEffect(() => {
    if (locations.length) {
      setIsEmpty(false);
      const { gameNameTerm, platformsTerm, isForExchange, isForSell } =
        userSearch;
      let gameName: string;

      if (gameNameSearch) {
        gameName = gameNameSearch;
      } else {
        gameName = gameNameTerm;
      }

      const selectedPlatforms = Object.keys(platformsTerm).filter(
        (key) => platformsTerm[key] === true
      );

      const newLocations = locations.filter(({ games }) => {
        if (!!selectedPlatforms.length) {
          if (isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameName.toLowerCase()) &&
              !!parseInt(games[0].price) === isForSell &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name)
              ).length
            );
          } else if (isForSell && !isForExchange) {
            return (
              games[0].name.toLowerCase().includes(gameName) &&
              !!parseInt(games[0].price) === isForSell &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name)
              ).length
            );
          } else if (!isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameName.toLowerCase()) &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name)
              ).length
            );
          } else {
            return (
              games[0].name.toLowerCase().includes(gameName.toLowerCase()) &&
              !!selectedPlatforms.filter((platform) =>
                platform.includes(games[0].platforms.name)
              ).length
            );
          }
        } else {
          if (isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameName.toLowerCase()) &&
              !!parseInt(games[0].price) === isForSell
            );
          } else if (isForSell && !isForExchange) {
            return (
              games[0].name.toLowerCase().includes(gameName.toLowerCase()) &&
              !!parseInt(games[0].price) === isForSell
            );
          } else if (!isForSell && isForExchange) {
            return (
              games[0].exchange === isForExchange &&
              games[0].name.toLowerCase().includes(gameName.toLowerCase())
            );
          } else {
            return games[0].name.toLowerCase().includes(gameName.toLowerCase());
          }
        }
      });

      setDisplayLocations(newLocations);
    } else {
      setIsEmpty(true);
    }
  }, [locations, userSearch, gameNameSearch]);

  return { displayLocations, isEmpty, isLoading };
}
