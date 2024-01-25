"use client";
import { FC, createContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const UserSearchContext = createContext<SearchTerms>({
  gameNameTerm: "",
  platformsTerm: {},
  isForSell: false,
  isForExchange: false,
});

export const LocationContext = createContext<UserLocation | null>(null);

export const ActionUserSearchContext = createContext<React.Dispatch<
  React.SetStateAction<SearchTerms>
> | null>(null);
export const ActionLocationContext = createContext<React.Dispatch<
  React.SetStateAction<UserLocation | null>
> | null>(null);

export const MapProvider: FC<ChildrenProp> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    cityName: "",
    provinceName: "",
    cityCenter: [0, 0],
  });
  const [searchTerms, setSearchTerms] = useState<SearchTerms>({
    gameNameTerm: "",
    platformsTerm: {},
    isForSell: false,
    isForExchange: false,
  });

  useEffect(() => {
    setUserLocation(JSON.parse(localStorage?.getItem("userLocation") ?? ""));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase.from("platforms").select("*");

      data.forEach((item: { name: string }) => {
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
