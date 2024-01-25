import Image from "next/image";
import { MapSearchModalSingleSuggestion, useGetGamesData } from "@/index";
import { FC } from "react";

const MapSearchModalSuggestions: FC<MapSearchModalSuggestionsProps> = ({ gameName, setGameName, onClose }) => {
  const {
    displayLocations: displayGames,
    isLoading,
  } = useGetGamesData(gameName);

  if (isLoading) {
    return (
      <p className="absolute top-11 md:top-[52px] flex gap-2 items-center right-0 w-full h-12 rounded-xl border border-gray-200 bg-white z-[403] py-1.5 px-3 font-peyda-regular leading-leading-3 text-gray-900">
        <Image
          src="images/map/fi-rr-gamepad.svg"
          alt="gamepad"
          width={24}
          height={24}
        />
        Loading...
      </p>
    );
  }

  if (!displayGames.length) {
    return (
      <p className="absolute top-11 md:top-[52px] flex gap-2 items-center right-0 w-full h-12 rounded-xl border border-gray-200 bg-white z-[403] py-1.5 px-3 font-peyda-regular leading-leading-3 text-gray-900">
        <Image
          src="images/map/fi-rr-gamepad.svg"
          alt="gamepad"
          width={24}
          height={24}
        />
        نتیجه ای یافت نشد!
      </p>
    );
  }

  return (
    <ul className="absolute top-11 md:top-[52px] right-0 rounded-xl bg-white z-[403] overflow-hidden w-full">
      {displayGames.slice(0, 5).map(({ games }) => (
        <MapSearchModalSingleSuggestion
          key={games[0].id}
          gameName={games[0].name}
          searchTerm={gameName.trim().toLowerCase()}
          setGameName={setGameName}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default MapSearchModalSuggestions;
