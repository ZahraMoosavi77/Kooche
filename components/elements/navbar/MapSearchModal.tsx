"use client";
import { useCallback, useContext, useState } from "react";
import Image from "next/image";
import {
  ActionUserSearchContext,
  MapSearchModalSuggestions,
  UserSearchContext,
} from "@/index";

const MapSearchModal = ({ onClose }) => {
  const { gameNameTerm } = useContext(UserSearchContext);
  const setSearchTerms = useContext(ActionUserSearchContext);
  const [gameName, setGameName] = useState(gameNameTerm);

  const handleSearchChange = useCallback((e) => {
    setGameName(() => e.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSearchTerms((prevState) => {
        return { ...prevState, gameNameTerm: gameName.trim() };
      });
      onClose(() => false);
    },
    [gameName],
  );

  return (
    <>
      <form
        className="absolute top-1.5 md:top-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 w-[60%] md:w-full md:h-full z-[403] flex gap-2 rounded-xl bg-white border border-primary cursor-text h-10 "
        onSubmit={handleSearchSubmit}
      >
        <label htmlFor="gameName" className="pr-3 py-[11px]  cursor-text">
          <Image
            src="images/map/Search_Magnifying_Glass_blue.svg"
            alt="Search Icon"
            width={16}
            height={16}
            className="md:w-6 md:h-6"
          />
        </label>
        <input
          type="text"
          name={"gameName"}
          id={"gameName"}
          value={gameName}
          onChange={handleSearchChange}
          className={
            "rounded-xl bg-white text-gray-900 py-[11px] pl-3  h-full w-full font-peyda-regular leading-leading-3 outline-0"
          }
          // autoComplete="off"
          autoFocus={true}
        />
        {!!gameName && (
          <MapSearchModalSuggestions
            gameName={gameName}
            setGameName={setGameName}
            onClose={onClose}
          />
        )}
      </form>
    </>
  );
};

export default MapSearchModal;
