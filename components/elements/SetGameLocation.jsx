import { useMap } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { NewContext } from "@/context/NewContext";
import { useContext } from "react";

const SetGameLocation = () => {

  const {setGameLocation,gameLocation} = useContext(NewContext)
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
   console.log(gameLocation);
  });
  return null;
};

export default SetGameLocation;

