export const setUserLocation = (cityName, provinceName, cityCenter) => {
  const location = JSON.stringify({
    cityName: cityName,
    cityCenter: cityCenter,
    provinceName: provinceName,
  });

  localStorage.setItem("userLocation", location);
};
