export const setUserLocation = (cityName, provinceName) => {
  const location = JSON.stringify({
    cityName: cityName,
    provinceName: provinceName,
  });

  localStorage.setItem("userLocation", location);
};
