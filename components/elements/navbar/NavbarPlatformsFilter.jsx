"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import { NavbarFilterPlatform } from "@/index";

const NavbarPlatformsFilter = ({ setFilters, platforms }) => {
  const [platformSearch, setPlatformSearch] = useState("");

  const handlePlatformSearchChange = useCallback((e) => {
    setPlatformSearch(() => e.target.value);
  }, []);

  return (
    <>
      <div className="mt-3">
        <p className="text-gray-900 font-peyda-bold leading-leading-1">
          نوع کنسول
        </p>
        <div className="relative w-full h-10 my-2 flex gap-1.5 rounded-xl bg-gray-200 cursor-text overflow-hidden">
          <label htmlFor="platformSearch" className="pr-3 py-[7px] cursor-text">
            <Image
              src="images/map/Search_Magnifying_Glass.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
          </label>
          <input
            type="text"
            name="platformSearch"
            value={platformSearch}
            id="platformSearch"
            placeholder="جستجو"
            onChange={handlePlatformSearchChange}
            className="rounded-xl bg-gray-200 text-gray-500 py-[7px] pl-3 w-full h-full font-peyda-regular leading-leading-3 outline-0"
          />
        </div>
      </div>
      <div className="overflow-y-auto flex-grow modal-scrollbar">
        <ul>
          {Object.keys(platforms)
            .filter((platform) =>
              platform
                .toLowerCase()
                .includes(platformSearch.toLowerCase().trim()),
            )
            .map((name, index) => (
              <NavbarFilterPlatform
                key={index}
                platformName={name}
                setPlatformState={setFilters}
                platformState={platforms[name]}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarPlatformsFilter;
