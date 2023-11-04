import { setUserLocation } from "@/utils/map/setUserLocation";
import { useCallback, useContext } from "react";
import { ActionLocationContext } from "@/context/map/mapContext";

const NavbarLocationCity = ({
  cityName,
  onClose,
  isProvinces,
  provinceName,
}) => {
  const setLocation = useContext(ActionLocationContext);
  const handleClick = useCallback(
    (cityName) => {
      setLocation({
        cityName,
        provinceName,
      });
      setUserLocation(cityName, provinceName);
      isProvinces(true);
      onClose(false);
    },
    [cityName],
  );

  return (
    <li
      onClick={() => handleClick(cityName)}
      className="flex justify-between items-center ml-2 cursor-pointer py-2 text-gray-900 font-peyda-medium text-scales-large"
    >
      {cityName}
    </li>
  );
};

export default NavbarLocationCity;
