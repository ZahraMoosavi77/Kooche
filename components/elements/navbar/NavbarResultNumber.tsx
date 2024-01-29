import { FC, useContext } from "react";
import { useGetGamesData, UserSearchContext } from "@/index";

const NavbarResultNumber:FC = () => {
  const { gameNameTerm } = useContext(UserSearchContext);
  const { displayLocations } = useGetGamesData();

  return (
    <>
      {!!gameNameTerm && (
        <div className="font-peyda-regular text-gray-800 mt-2">
          {!!displayLocations.length ? (
            <p>
              {displayLocations.length} نتیجه برای “{gameNameTerm}” در این
              محدوده
            </p>
          ) : (
            <p>نتیجه‌ای برای ”{gameNameTerm}“ در این محدوده یافت نشد</p>
          )}
        </div>
      )}
    </>
  );
};

export default NavbarResultNumber;
