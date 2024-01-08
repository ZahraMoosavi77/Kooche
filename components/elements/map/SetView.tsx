const SetView = ({ map, markerGroup, mapCenter }): null => {
  if (!!Object.keys(markerGroup.getBounds()).length) {
    map.flyToBounds(markerGroup.getBounds(), {
      animate: true,
      duration: 3,
      easeLinearity: 0.1,
    });
  } else {
    map.flyTo(mapCenter, 11, {
      duration: 3,
    });
  }

  return null;
};

export default SetView;
