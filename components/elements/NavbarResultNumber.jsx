"use client";
import { useContext, useEffect, useState } from "react";
import { UserSearchContext } from "@/context/map/mapContext";
import { supabase } from "@/lib/supabase";

const NavbarResultNumber = () => {
  const { gameNameTerm } = useContext(UserSearchContext);
  const [resultNumber, setResultNumber] = useState(0);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("locations")
        .select(`games!inner(name,id,cities!inner(name))`)
        .eq(
          "games.cities.name",
          JSON.parse(localStorage.getItem("userLocation")).cityName,
        );

      setGameList(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {!!gameNameTerm && (
        <div className="font-peyda-regular text-gray-800 mt-2">
          {
            gameList.filter(({ games }) =>
              games[0].name
                .toLowerCase()
                .includes(gameNameTerm.trim().toLowerCase()),
            ).length
          }{" "}
          نتیجه برای “{gameNameTerm}” در این محدوده
        </div>
      )}
    </>
  );
};

export default NavbarResultNumber;
