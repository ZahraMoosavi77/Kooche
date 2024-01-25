import { MapSearchFilter, MapSearchInput } from "@/index";
import { FC } from "react";

const MapSearch:FC = () => {
  return (
    <>
      <MapSearchInput />
      <MapSearchFilter />
    </>
  );
};

export default MapSearch;
