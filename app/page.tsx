
import dynamic from "next/dynamic";
import { useState } from 'react'
const MapContent = dynamic(
  () => import("@/components/elements/map/MapContent"),
  {
    ssr: false, // Disable server-side rendering for Leaflet component
  }
);



export default function page() {

  if(typeof window !== undefined) {
  return (
   <div className="flex flex-grow">
   <MapContent />
 </div>)};
}
  
