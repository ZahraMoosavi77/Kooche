import { useCallback } from "react";
import Image from "next/image";

const NavbarLocationProvince = ({ province, isProvinces, setCities }) => {
  const { name, cities } = province;

  const handleCities = useCallback(() => {
    isProvinces(false);
    setCities({
      citiesList: cities,
      province: name,
    });
  }, [cities]);

  return (
    <li
      className="flex justify-between items-center ml-2 cursor-pointer py-2"
      onClick={handleCities}
    >
      <span className="text-gray-900 font-peyda-medium text-scales-large">
        {name}
      </span>
      <Image
        src="/images/map/Chevron_Left.svg"
        alt="Location"
        width={24}
        height={24}
        className=""
      />
    </li>
  );
};

export default NavbarLocationProvince;
