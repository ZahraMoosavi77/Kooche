import { MapContainer,TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapNewPage() {
  const CENTER = [35.68804331563681, 51.38883302970867];
  return (
    <div className='rounded-xl w-full h-[300px]'>
      <MapContainer center={CENTER} zoom={10} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  )
}
