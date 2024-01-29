"use client";
import { FC, useContext, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { Loading, LocationContext, SetView, useGetGamesData } from "@/index";
import dynamic from "next/dynamic";
const Marker = dynamic(() => import("@/components/elements/map/Marker"), {
  ssr: false, // Disable server-side rendering for Leaflet component
});

const MarkersContainer: FC = () => {
  const { displayLocations, isEmpty, isLoading } = useGetGamesData();
  const { cityCenter: mapCenter } = useContext(LocationContext);
  const [emptyCity, setEmptyCity] = useState(isEmpty);

  useEffect(() => {
    setEmptyCity(false);
  }, [mapCenter]);

  const map = useMap();
  const markerGroup = L.featureGroup().addTo(map);
  markerGroup.clearLayers();
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  if (isLoading) {
    return (
      <div className="z-[401] bg-white relative w-full h-full">
        <Loading />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <>
        <SetView
          markerGroup={markerGroup}
          map={map}
          mapCenter={mapCenter as LatLngExpression}
        />
        {!emptyCity && (
          <span className="relative text-white py-2 top-6 px-6 rounded-xl bg-accent-dark font-peyda-bold leading-leading-3 z-[401]">
            آگهی در این شهر وجود ندارد
            <span
              onClick={() => setEmptyCity(true)}
              className="mr-3 p-2 text-primary cursor-pointer"
            >
              متوجه شدم
            </span>
          </span>
        )}
      </>
    );
  }

  return (
    <>
      {displayLocations.map((location) => (
        <Marker
          key={location.id}
          location={location}
          markerGroup={markerGroup}
        />
      ))}
      <SetView
        markerGroup={markerGroup}
        map={map}
        mapCenter={mapCenter as LatLngExpression}
      />
    </>
  );
};

export default MarkersContainer;
