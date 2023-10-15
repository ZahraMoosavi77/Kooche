// "use client";


import {MapProvider} from "@/context/map/mapContext";
import MapSearch from "@/components/elements/map/MapSearch";
import MapContent from "@/components/elements/map/MapContent";

const Map = () => {
  return (
    <div className={"w-screen h-screen flex-col py-16 px-36"}>
      <MapProvider>
        <MapSearch />
        <MapContent />
      </MapProvider>
    </div>
  );
};

export default Map;
