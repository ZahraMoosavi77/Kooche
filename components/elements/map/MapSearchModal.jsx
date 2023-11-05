import { useCallback, useContext, useState } from "react";
import Image from "next/image";
import {
  ActionUserSearchContext,
  UserSearchContext,
} from "@/context/map/mapContext";
import MapSearchModalSuggestions from "@/components/elements/map/MapSearchModalSuggestions";

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
        className="absolute top-0 right-0 w-full h-full z-[403] flex gap-2 rounded-xl bg-white border border-primary cursor-text"
        onSubmit={handleSearchSubmit}
      >
        <label htmlFor="gameName" className="pr-3 py-[11px]  cursor-text">
          <Image
            src="images/map/Search_Magnifying_Glass_blue.svg"
            alt="Search Icon"
            width={24}
            height={24}
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
          autoComplete="off"
          autoFocus={true}
        />
      </form>
      {!!gameName && (
        <MapSearchModalSuggestions
          gameName={gameName}
          setGameName={setGameName}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default MapSearchModal;
