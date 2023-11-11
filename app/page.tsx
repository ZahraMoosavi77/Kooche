// import MapContent from "@/components/elements/map/MapContent";
import dynamic from "next/dynamic"
import { ComponentType } from "react";

// const MapContent: ComponentType<{}> = dynamic(
//   dynamicOptions: () => import('@/components/elements/map/MapContent'),
//   options:{
//     ssr: false
//   }
// )
const MapContent = dynamic(() => import('@/components/elements/map/MapContent'), {
  ssr: false
})

export default function page() {
  return (
    <div className="flex flex-grow">
      <MapContent />
    </div>
  );
}
