import { setUserLocation } from "@/utils/map/setUserLocation";
import { useCallback, useContext } from "react";
import {
  ActionLocationContext,
  ActionUserSearchContext,
  UserSearchContext,
} from "@/context/map/mapContext";

const NavbarLocationCity = ({
  cityName,
  onClose,
  isProvinces,
  provinceName,
}) => {
  const setLocation = useContext(ActionLocationContext);
  const { platformsTerm } = useContext(UserSearchContext);
  const setSearchTerms = useContext(ActionUserSearchContext);

  const handleClick = useCallback(
    (cityName) => {
      setLocation({
        cityName,
        provinceName,
      });
      setUserLocation(cityName, provinceName);
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
      onClick={() => handleClick(cityName)}
      className="flex justify-between items-center ml-2 cursor-pointer py-2 text-gray-900 font-peyda-medium text-scales-large"
    >
      {cityName}
    </li>
  );
};

export default NavbarLocationCity;
