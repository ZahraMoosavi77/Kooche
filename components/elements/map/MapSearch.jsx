"use client";
import MapSearchInput from "@/components/elements/map/MapSearchInput";
import MapSearchFilter from "@/components/elements/map/MapSearchFilter";
import { usePathname } from "next/navigation";

const MapSearch = () => {
  const path = usePathname();

  if (path === "/")
    return (
      <>
        <MapSearchInput />
        <MapSearchFilter />
      </>
    );
};

export default MapSearch;
