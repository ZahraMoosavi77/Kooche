import { useCallback, useContext } from "react";
import Image from "next/image";
import { ActionUserSearchContext } from "@/context/map/mapContext";

const NavbarSearchPlatformsTags = ({ platformName }) => {
  const setSearchTerm = useContext(ActionUserSearchContext);

  const handleTagClick = useCallback(
    (e) => {
      setSearchTerm((prevState) => ({
        ...prevState,
        platformsTerm: { ...prevState.platformsTerm, [platformName]: false },
      }));
    },
    [platformName],
  );
  return (
    <span className="flex gap-1 text-gray-900 font-peyda-regular py-0.5 px-4 border border-gray-300 bg-gray-200 rounded-[80px] items-center mt-4">
      <Image
        id={platformName}
        src="images/map/Close_SM.svg"
        alt="Close"
        width={16}
        height={16}
        onClick={handleTagClick}
        className="cursor-pointer"
      />
      {platformName}
    </span>
  );
};

export default NavbarSearchPlatformsTags;
