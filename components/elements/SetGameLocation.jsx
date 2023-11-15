import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import { NewContext } from "@/context/NewContext";
import { useContext } from "react";
import { supabase } from "@/lib/supabase";

const SetGameLocation = () => {
  const { setGameLocation, gameLocation,values } = useContext(NewContext);
  const game_location = [gameLocation.lat,gameLocation.lng]
  const handleInsertLocation = async () => {
    const { data, error } = await supabase
      .from('locations')
      .insert([
        { game_location: game_location },
      ])
      .select()
      if(data) values.locId = data.id;
  }
  useEffect(() => {
    handleInsertLocation();
  }, [gameLocation])


  const map = useMap();
  map.on("click", function (e) {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    let markerIcon = L.icon({
      iconUrl: "/images/map/get-location.svg",
      iconSize: [24, 24],
    });

    setGameLocation(e.latlng);
    let marker = new L.marker(e.latlng, { icon: markerIcon }).addTo(map);
    handleInsertLocation();
  });
  return null;
};

export default SetGameLocation;
