"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import NavbarFilterPlatform from "@/components/elements/NavbarFilterPlatform";

const NavbarFilterModal = ({
  onClose,
  onPlatformsClick,
  setSearch,
  searchTerm,
}) => {
  const [platforms, setPlatforms] = useState([]);
  // const [selectPlatforms, setSelectPlatforms] = useState({});
  const { platformsTerm, isForSell, isForExchange } = searchTerm;
  const handleFilterClick = useCallback(() => {
    onClose(false);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, checked } = e.target;
    setSearch((prevState) => {
      return { ...prevState, [name]: checked };
    });
  }, []);

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="absolute w-full h-full top-0 right-0 z-[999] bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] flex items-center justify-center">
      <div className="w-[320px] h-[500px] bg-white p-8 rounded-[20px] flex flex-col">
        <div className="mb-6 flex justify-between">
          <span>فیلترها</span>
          <Image
            src="/images/map/Close_LG.svg"
            alt="Close"
            width={16}
            height={16}
            onClick={() => onClose(false)}
            className="cursor-pointer"
          />
        </div>
        <div>
          <p>نوع فروش</p>
          <div>
            <div className="cursor-pointer">
              <input
                type="checkbox"
                name="isForSell"
                id="sell"
                checked={isForSell}
                onChange={handleChange}
              />
              فروش
            </div>
            <div className="cursor-pointer">
              <input
                type="checkbox"
                name="isForExchange"
                id="exchange"
                checked={isForExchange}
                onChange={handleChange}
              />
              تبادل
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll modal-scrollbar">
          <p>نوع کنسول</p>
          <ul>
            {Object.keys(platformsTerm).map((name, index) => (
              <NavbarFilterPlatform
                key={index}
                platformName={name}
                setPlatformState={setSearch}
                platformState={platformsTerm[name]}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <button onClick={() => onClose(false)}>لغو</button>
          <button className="bg-primary text-white" onClick={handleFilterClick}>
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarFilterModal;
