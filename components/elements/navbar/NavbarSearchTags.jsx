import { useCallback, useContext } from "react";
import {
  ActionUserSearchContext,
  NavbarSearchPlatformsTags,
  UserSearchContext,
} from "@/index";
import Image from "next/image";

const NavbarSearchTags = () => {
  const { isForSell, isForExchange, platformsTerm } =
    useContext(UserSearchContext);
  const setSearchTerm = useContext(ActionUserSearchContext);

  const handleTagClick = useCallback((e) => {
    setSearchTerm((prevState) => {
      return {
        ...prevState,
        [e.target.id]: false,
      };
    });
  }, []);
  return (
    <div className="flex items-center gap-2 overflow-y-auto no-scrollbar">
      {isForSell && (
        <span className="flex gap-1 flex-shrink-0 text-gray-900 font-peyda-regular py-0.5 px-4 border border-gray-300 bg-gray-200 rounded-[80px] items-center mt-4">
          <Image
            id="isForSell"
            src="images/map/Close_SM.svg"
            alt="Close"
            width={16}
            height={16}
            onClick={handleTagClick}
          />
          فروش
        </span>
      )}
      {isForExchange && (
        <span className="flex gap-1 flex-shrink-0 text-gray-900 font-peyda-regular py-0.5 px-4 border border-gray-300 bg-gray-200 rounded-[80px] items-center mt-4">
          <Image
            id="isForExchange"
            src="images/map/Close_SM.svg"
            alt="Close"
            width={16}
            height={16}
            onClick={handleTagClick}
            className="cursor-pointer"
          />
          تبادل
        </span>
      )}
      {Object.keys(platformsTerm)
        .filter((platform) => platformsTerm[platform] === true)
        .map((platform, index) => (
          <NavbarSearchPlatformsTags key={index} platformName={platform} />
        ))}
    </div>
  );
};

export default NavbarSearchTags;
