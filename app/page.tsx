import dynamic from "next/dynamic";

const MapContent = dynamic(
  () => import("@/components/elements/map/MapContent"),
  {
    ssr: false, // Disable server-side rendering for Leaflet component
  },
);

const Page = () => {
  return (
    <div className="flex flex-grow">
      <MapContent />
    </div>
  );
};

export default Page;
