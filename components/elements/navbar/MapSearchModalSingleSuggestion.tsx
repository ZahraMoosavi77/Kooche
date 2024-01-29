"use client";
import Image from "next/image";
import {
  FC,
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { ActionUserSearchContext } from "@/index";

const MapSearchModalSingleSuggestion: FC<
  MapSearchModalSingleSuggestionProps
> = ({ gameName, searchTerm, setGameName, onClose }) => {
  const setSearchTerms = useContext(ActionUserSearchContext);
  const itemRef = useRef<HTMLLIElement>();
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const LiRef = itemRef.current;
    const ImageRef = imageRef.current;

    const handleHover = () => {
      ImageRef.src = "images/map/fi-rr-gamepad-blue.svg";
    };

    const handleHoverEnd = () => {
      ImageRef.src = "images/map/fi-rr-gamepad.svg";
    };

    if (LiRef) {
      LiRef.addEventListener("mouseover", handleHover);
      LiRef.addEventListener("mouseleave", handleHoverEnd);
    }

    return () => {
      if (LiRef) {
        LiRef.removeEventListener("mouseover", handleHover);
        LiRef.removeEventListener("mouseleave", handleHoverEnd);
      }
    };
  }, []);

  const handleSearchItemClick = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      onClose();
      setSearchTerms((prevState) => {
        return { ...prevState, gameNameTerm: gameName };
      });
      setGameName(gameName);
    },
    [gameName, onClose, setGameName, setSearchTerms]
  );

  return (
    <li
      className="cursor-pointer py-1.5 px-3 h-12 items-center flex gap-2 hover:bg-primary-50 text-gray-900 hover:text-primary"
      ref={itemRef}
      onClick={handleSearchItemClick}
    >
      <Image
        src="images/map/fi-rr-gamepad.svg"
        ref={imageRef}
        alt="gamepad"
        width={24}
        height={24}
      />
      <p className="font-peyda-regular leading-leading-3 whitespace-nowrap text-ellipsis overflow-hidden">
        {gameName.substring(0, gameName.toLowerCase().indexOf(searchTerm))}

        <span className="font-semibold">
          {gameName.substring(
            gameName.toLowerCase().indexOf(searchTerm),
            gameName.toLowerCase().indexOf(searchTerm) + searchTerm.length
          )}
        </span>

        {gameName.substring(
          gameName.toLowerCase().indexOf(searchTerm) + searchTerm.length,
          gameName.toLowerCase().length
        )}
      </p>
    </li>
  );
};

export default MapSearchModalSingleSuggestion;
