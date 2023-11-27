"use client";
import { createContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const UserSearchContext = createContext();
export const LocationContext = createContext();
export const ActionUserSearchContext = createContext();
export const ActionLocationContext = createContext();

export const MapProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState("");
  const [searchTerms, setSearchTerms] = useState({
    gameNameTerm: "",
    platformsTerm: {},
    isForSell: false,
    isForExchange: false,
  });

  useEffect(() => {
    setUserLocation(JSON.parse(localStorage?.getItem("userLocation")));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase.from("platforms").select("*");

      data.forEach((item) => {
        setSearchTerms((prevState) => ({
          ...prevState,
          platformsTerm: { ...prevState.platformsTerm, [item.name]: false },
        }));
      });
    };

    fetchData();
  }, []);
  return (
    <LocationContext.Provider value={userLocation}>
      <ActionLocationContext.Provider value={setUserLocation}>
        <UserSearchContext.Provider value={searchTerms}>
          <ActionUserSearchContext.Provider value={setSearchTerms}>
            {children}
          </ActionUserSearchContext.Provider>
        </UserSearchContext.Provider>
      </ActionLocationContext.Provider>
    </LocationContext.Provider>
  );
};
