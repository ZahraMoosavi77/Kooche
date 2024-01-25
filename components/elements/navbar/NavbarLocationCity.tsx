import { FC, useCallback, useContext } from "react";
import {
  ActionLocationContext,
  ActionUserSearchContext,
  UserSearchContext,
  setUserLocation,
} from "@/index";

const NavbarLocationCity: FC<NavbarLocationCityProps> = ({
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
    (cityName: string, cityCenter: Center) => {
      const defaultLocation: UserLocation = {
        cityName,
        provinceName,
        cityCenter,
      };

      setLocation(defaultLocation);
      setUserLocation(defaultLocation);

      const newplatformsTerm = Object.keys(platformsTerm).reduce(
        (prev, curr) => ({ ...prev, [curr]: false }),
        {}
      );
      setSearchTerms((prev) => ({
        gameNameTerm: "",
        platformsTerm: newplatformsTerm,
        isForSell: false,
        isForExchange: false,
      }));
      isProvinces();
      onClose();
    },
    [
      isProvinces,
      onClose,
      platformsTerm,
      provinceName,
      setLocation,
      setSearchTerms,
    ]
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
