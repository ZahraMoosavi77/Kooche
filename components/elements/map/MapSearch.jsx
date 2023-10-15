'use client'
import { useCallback, useContext, useEffect, useState } from "react";
import {ActionMarkerContext} from "@/context/map/mapContext";


const MapSearch = () => {
  const [searchTerms, setSearchTerms] = useState({
    gameTerm: "",
    platformTerm: "All",
  });
  const [platformsList, setPlatformsList] = useState([]);
  const [gameList, setGameList] = useState([]);

  const setMarkerList = useContext(ActionMarkerContext);

  const { gameTerm, platformTerm } = searchTerms;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data: platforms, error: platformsError } = await supabase
  //       .from("platforms")
  //       .select("name");
  //     setPlatformsList(platforms);
  //
  //     let { data: games, error: gamesError } = await supabase.from("locations")
  //       .select(`
  //       id,loc,
  //       games(
  //       name,price,
  //       platforms(name)
  //       )
  //       `);
  //     setGameList(games);
  //   };
  //
  //   fetchData();
  // }, []);

  const handleChange = useCallback((target) => {
    const { name, value } = target;
    if (name === "gameName") {
      setSearchTerms((prevState) => {
        return { ...prevState, gameTerm: value };
      });
    } else if (name === "platforms") {
      setSearchTerms((prevState) => {
        return { ...prevState, platformTerm: value };
      });
    }
  }, []);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const a = getGamesFilter(searchTerms, gameList);
      console.log(a);
      setMarkerList(a);
    },
    [searchTerms, gameList],
  );

  return (
    <div className={"flex"}>
      <div className={"text-gray-950 w-full"}>
        <form id={"search_form"}>
          <input
            type="text"
            name={"gameName"}
            value={gameTerm}
            onChange={({ target }) => handleChange(target)}
            className={"w-4/6 rounded-xl py-1.5 px-3"}
            placeholder={"نام بازی"}
          />
          <select
            name="platforms"
            onChange={({ target }) => handleChange(target)}
            className={"mx-3 h-full"}
          >
            <option value="All">All</option>
            {platformsList.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={"bg-white"}
            onClick={(e) => handleClick(e)}
          >
            جست و جو
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapSearch;
