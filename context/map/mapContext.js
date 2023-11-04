"use client";
import { createContext, useEffect, useState } from "react";

export const UserSearchContext = createContext();
export const LocationContext = createContext();
export const ActionUserSearchContext = createContext();
export const ActionLocationContext = createContext();

export const MapProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUserLocation(JSON.parse(localStorage.getItem("userLocation")));
  }, []);

  return (
    <LocationContext.Provider value={userLocation}>
      <ActionLocationContext.Provider value={setUserLocation}>
        <UserSearchContext.Provider value={searchTerm}>
          <ActionUserSearchContext.Provider value={setSearchTerm}>
            {children}
          </ActionUserSearchContext.Provider>
        </UserSearchContext.Provider>
      </ActionLocationContext.Provider>
    </LocationContext.Provider>
  );
};
