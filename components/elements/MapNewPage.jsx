import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SetGameLocation from "./SetGameLocation";

export default function MapNewPage() {
  const mapOptions = {
    center: [35.68804331563681, 51.38883302970867],
    zoom: 10,
    scrollWheelZoom: true,
    attributionControl :false
  };
  return (
    <div className="rounded-xl w-full h-[300px]">
      <MapContainer {...mapOptions} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetGameLocation />
      </MapContainer>
    </div>
  );
}
