"use client";
import { createContext, useState } from "react";

export const MarkerContext = createContext();
export const ActionMarkerContext = createContext();

export const MapProvider = ({ children }) => {
  const [list, setList] = useState([]);
  // const [list2:number[], setList2:] = useState([1]);

  // useEffect(() => {
  // const fetchData = async () => {
  //     let { data, error } = await supabase.from("locations").select(`
  //       id,loc,
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
