"use client";
import { FC, useEffect } from "react";
import { Map, LatLngBounds, LayerGroup } from "leaflet";

interface SetViewProps {
  map: Map;
  markerGroup: LayerGroup; 
  mapCenter: Center; 
}

const SetView: FC<SetViewProps> = ({ map, markerGroup, mapCenter }): null => {
  useEffect(() => {
    const flyToOptions = {
      duration: 3,
    };

    if (!!Object.keys(markerGroup.getBounds()).length) {
      map.flyToBounds(markerGroup.getBounds() as LatLngBounds, {
        animate: true,
        easeLinearity: 0.1,
        ...flyToOptions,
      });
    } else {
      map.flyTo(mapCenter, 11, flyToOptions);
    }
  }, [map, markerGroup, mapCenter]);

  return null;
};

export default SetView;
