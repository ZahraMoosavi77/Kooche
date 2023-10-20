import { MapProvider } from "@/context/map/mapContext";
import MapContent from "@/components/elements/map/MapContent";

const Map = () => {
  return (
    <>
      <MapProvider>
        <MapContent />
      </MapProvider>
    </>
  );
};

export default Map;
