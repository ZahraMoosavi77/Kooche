import { FC, MouseEvent, useCallback, useContext } from "react";
import Image from "next/image";
import { ActionUserSearchContext } from "@/index";

const NavbarSearchPlatformsTags: FC<NavbarSearchPlatformsTagsProps> = ({
  platformName,
}) => {
  const setSearchTerm = useContext(ActionUserSearchContext);

  const handleTagClick = useCallback(
    (e: MouseEvent<HTMLImageElement>) => {
      setSearchTerm((prevState) => ({
        ...prevState,
        platformsTerm: { ...prevState.platformsTerm, [platformName]: false },
      }));
    },
    [platformName, setSearchTerm]
  );

  return (
    <span className="flex gap-1 flex-shrink-0 text-gray-900 font-peyda-regular py-0.5 px-4 border border-gray-300 bg-gray-200 rounded-[80px] items-center mt-4">
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
