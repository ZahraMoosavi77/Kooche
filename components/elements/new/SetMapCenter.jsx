import {useMap } from "react-leaflet"
export default function SetMapCenter({mapCenter}) {
  const map = useMap();
  map.setView(mapCenter,11)
  return null
}
