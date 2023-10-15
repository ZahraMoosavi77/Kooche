'use client'
import { createContext, useEffect, useState } from "react";

export const MarkerContext = createContext();
export const ActionMarkerContext = createContext();

export const MapProvider = ({ children }) => {
  const [list, setList] = useState([]);

  {/*useEffect(() => {*/}
  {/*  const fetchData = async () => {*/}
  {/*    let { data, error } = await supabase.from("locations").select(`*/}
  {/*      id,loc,*/}
  //       games(
  //       name,price,
  //       platforms(name)
  //       )
  //       `);
  //     setList(data);
  //   };
  //
  //   fetchData();
  // }, []);

  return (
    <MarkerContext.Provider value={list}>
      <ActionMarkerContext.Provider value={setList}>
        {children}
      </ActionMarkerContext.Provider>
    </MarkerContext.Provider>
  );
};
