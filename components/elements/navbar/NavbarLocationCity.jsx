import { useCallback, useContext } from "react";
import {
  ActionLocationContext,
  ActionUserSearchContext,
  setUserLocation,
  UserSearchContext,
} from "@/index";

const NavbarLocationCity = ({
  cityName,
  onClose,
  isProvinces,
  provinceName,
  cityCenter,
}) => {
  const setLocation = useContext(ActionLocationContext);
  const { platformsTerm } = useContext(UserSearchContext);
  const setSearchTerms = useContext(ActionUserSearchContext);

  const handleClick = useCallback(
    (cityName, cityCenter) => {
      setLocation({
        cityName,
        provinceName,
        cityCenter,
      });
      setUserLocation(cityName, provinceName, cityCenter);
      const newplatformsTerm = Object.keys(platformsTerm).reduce(
        (prev, curr) => ({ ...prev, [curr]: false }),
        {},
      );
      setSearchTerms((prev) => ({
        gameNameTerm: "",
        platformsTerm: newplatformsTerm,
        isForSell: false,
        isForExchange: false,
      }));
      isProvinces(true);
      onClose(false);
    },
    [cityName],
  );

  return (
    <li
      onClick={() => handleClick(cityName, cityCenter)}
      className="flex justify-between items-center ml-2 cursor-pointer py-2 text-gray-900 font-peyda-medium text-scales-large"
    >
      {cityName}
    </li>
  );
};

export default NavbarLocationCity;
