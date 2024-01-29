export const setUserLocation = (location: UserLocation) => {
  const strLocation = JSON.stringify(location);

  localStorage.setItem("userLocation", strLocation);
};
