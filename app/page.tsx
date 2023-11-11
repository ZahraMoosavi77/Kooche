import dynamic from "next/dynamic";

const MapContent = dynamic(
  () => import("@/components/elements/map/MapContent"),
  {
    ssr: false, // Disable server-side rendering for Leaflet component
  },
);

export default function page() {
  return (
    <div className="flex flex-grow">
      <MapContent />
    </div>
  );
}
