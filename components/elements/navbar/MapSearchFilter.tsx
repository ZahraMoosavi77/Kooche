"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { NavbarFilterModal, useWindowSize } from "@/index";

const MapSearchFilter = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { width } = useWindowSize();

  const handleFilterClick = useCallback(() => {
    setIsFilterModalOpen(() => true);
  }, []);

  return (
    <>
      <button
        className="flex relative items-center gap-2 rounded-xl md:border-2 border-primary text-primary md:px-2.5 md2:px-4 p-2 font-peyda-semibold order-1 md:order-[0]"
        onClick={handleFilterClick}
      >
        <Image
          src={`images/map/filter${width < 768 ? "-black" : ""}.svg`}
          alt="Filter Icon"
          width={32}
          height={32}
          className="md:w-6 md:h-6"
        />
        <span className="hidden md:inline">فیلتر</span>
        {/*<span className="md:hidden w-2 h-2 rounded-full bg-accent-error-text absolute top-2.5 right-2.5"></span>*/}
      </button>
      {isFilterModalOpen && (
        <NavbarFilterModal onClose={setIsFilterModalOpen} />
      )}
    </>
  );
};

export default MapSearchFilter;
