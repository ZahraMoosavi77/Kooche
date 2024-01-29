"use client";
import Image from "next/image";
import { FC, useCallback, useContext, useState } from "react";
import { MapSearchModal, UserSearchContext, useWindowSize } from "@/index";

const MapSearchInput:FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const searchTerm = useContext(UserSearchContext);
  const { gameNameTerm } = searchTerm;
  const { width } = useWindowSize();

  const onClose = useCallback(() => {
    setIsSearchModalOpen(() => false);
  }, []);

  return (
    <>
      <div
        className="rounded-xl p-2 text-gray-500 md:py-[11px] md:px-3 flex gap-2 md:bg-gray-200 md:min-w-[160px] lg:max-w-[380px] md:max-w-[280px] md:h-12 font-peyda-regular leading-leading-3 cursor-pointer md:cursor-text md:relative order-1 md:order-[0] md:flex-grow"
        onClick={() => setIsSearchModalOpen(() => true)}
      >
        <Image
          src={`images/map/Search_Magnifying_Glass${
            width < 768 ? "-black" : ""
          }.svg`}
          alt="Search Icon"
          width={32}
          height={32}
          className="md:w-6 md:h-6"
        />
        <span className="whitespace-nowrap text-ellipsis overflow-hidden hidden md:inline">
          {gameNameTerm || "جستجو"}
        </span>
        {isSearchModalOpen && <MapSearchModal onClose={onClose} />}
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
