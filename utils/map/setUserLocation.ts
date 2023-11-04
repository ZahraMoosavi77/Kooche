export const setUserLocation = (cityName, provinceName) => {
  const location = JSON.stringify({
    cityName: cityName,
    provinceName: provinceName,
  });

  if (localStorage.getItem("userLocation")) {
    localStorage.setItem("userLocation", location);
  } else {
    localStorage.setItem(
      "userLocation",
      '{"cityName":"تهران","provinceName":"تهران"}',
    );
  }
};
