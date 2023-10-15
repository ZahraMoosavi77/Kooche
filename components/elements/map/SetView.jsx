const SetView = ({ map, markerGroup }) => {
  if (!!Object.keys(markerGroup.getBounds()).length) {
    map.flyToBounds(markerGroup.getBounds(), {
      animate: true,
      duration: 3,
      easeLinearity: 0.1,
    });
  }
  return null;
};

export default SetView;
