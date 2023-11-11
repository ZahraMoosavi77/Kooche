"use client";
import { useContext } from "react";
import { UserSearchContext } from "@/context/map/mapContext";
import { useGetGamesData } from "@/hooks/useGetGamesData";

const NavbarResultNumber = () => {
  const { gameNameTerm } = useContext(UserSearchContext);
  const gamesNumber = useGetGamesData().length;

  return (
    <>
      {!!gameNameTerm && (
        <div className="font-peyda-regular text-gray-800 mt-2">
          {gamesNumber} نتیجه برای “{gameNameTerm}” در این محدوده
        </div>
      )}
    </>
  );
};

export default NavbarResultNumber;
