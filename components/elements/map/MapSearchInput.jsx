import Image from "next/image";
import { useContext, useState } from "react";
import MapSearchModal from "@/components/elements/map/MapSearchModal";
import { UserSearchContext } from "@/context/map/mapContext";

const MapSearchInput = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const searchTerm = useContext(UserSearchContext);
  const { gameNameTerm } = searchTerm;

  console.log(isSearchModalOpen);
  return (
    <>
      <div
        className="rounded-xl text-gray-500 py-[11px] px-3 flex gap-2 bg-gray-200 w-[380px] h-12 font-peyda-regular leading-leading-3 cursor-text relative"
        onClick={() => setIsSearchModalOpen(() => true)}
      >
        <Image
          src="images/map/Search_Magnifying_Glass.svg"
          alt="Search Icon"
          width={24}
          height={24}
        />
        <span className="whitespace-nowrap text-ellipsis overflow-hidden">
          {gameNameTerm || "جستجو"}
        </span>
        {isSearchModalOpen && <MapSearchModal onClose={setIsSearchModalOpen} />}
      </div>
      {isSearchModalOpen && (
        <div
          className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-[402]"
          onClick={() => setIsSearchModalOpen(() => false)}
        ></div>
      )}
    </>
  );
};

export default MapSearchInput;
