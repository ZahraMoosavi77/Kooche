"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import NavbarFilterModal from "@/components/elements/NavbarFilterModal";
import { supabase } from "@/lib/supabase";
import { ActionUserSearchContext } from "@/context/map/mapContext";

const MapSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setUserSearch = useContext(ActionUserSearchContext);
  const [searchTerms, setSearchTerms] = useState({
    gameNameTerm: "",
    platformsTerm: {},
    isForSell: false,
    isForExchange: false,
  });
  const { gameNameTerm, isForExchange, isForSell, platformsTerm } = searchTerms;

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase.from("platforms").select("*");

      data.forEach((item) => {
        setSearchTerms((prevState) => ({
          ...prevState,
          platformsTerm: { ...prevState.platformsTerm, [item.name]: false },
        }));
      });
    };

    fetchData();
  }, []);

  const handleSearchClick = useCallback((platforms) => {
    setSearchTerms((prevState) => {
      return { ...prevState, platformsTerm: platforms };
    });
  }, []);

  useEffect(() => {
    // const finalSearch = {gameName: gameNameTerm,isForSell:isForSell,isForExchange: isForExchange,platformsList: platformsTerm.filter(pla)   }
    setUserSearch(JSON.stringify(searchTerms));
  }, [searchTerms, setUserSearch]);

  const handleChange = useCallback((target) => {
    setSearchTerms((prevState) => {
      return { ...prevState, gameNameTerm: target.value };
    });
  }, []);

  const handleّFilterClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
    },
    [searchTerms],
  );

  const handlePlatformsClick = useCallback((platforms) => {
    setSearchTerms((prevState) => {
      return { ...prevState, platformsTerm: platforms };
    });
  }, []);

  return (
    <>
      {/*<div*/}
      {/*  className={*/}
      {/*    "rounded-xl text-gray-500 py-[11px] px-3 flex gap-2 bg-gray-200 w-[380px] h-12 font-peyda-regular leading-leading-3 cursor-text"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    src="images/map/Search_Magnifying_Glass.svg"*/}
      {/*    alt="Search Icon"*/}
      {/*    width={24}*/}
      {/*    height={24}*/}
      {/*  />*/}

      {/*  <span>جستجو</span>*/}
      {/*</div>*/}
      {/*<div className=""></div>*/}
      <form className="relative" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name={"gameName"}
          value={gameNameTerm}
          onChange={({ target }) => handleChange(target)}
          // onClick={handleSearchClick}
          className={
            "rounded-xl text-gray-500 py-[11px] pl-3 pr-11 bg-gray-200 w-[380px] h-12 font-peyda-regular leading-leading-3"
          }
          placeholder={"جستجو"}
        />
        <Image
          src="images/map/Search_Magnifying_Glass.svg"
          alt="Search Icon"
          width={24}
          height={24}
          className="absolute top-[11px] right-3"
        />
      </form>
      <button
        className="flex items-center gap-2 rounded-xl border-2 border-primary text-primary px-4 py-2 font-peyda-semibold"
        onClick={handleّFilterClick}
      >
        <Image
          src="images/map/filter.svg"
          alt="Filter Icon"
          width={24}
          height={24}
        />
        فیلتر
      </button>
      {isModalOpen && (
        <NavbarFilterModal
          onClose={setIsModalOpen}
          onPlatformsClick={handlePlatformsClick}
          setSearch={setSearchTerms}
          searchTerm={searchTerms}
        />
      )}
    </>
  );
};

export default MapSearch;
