import Image from "next/image";
import NavbarFilterModal from "../NavbarFilterModal";
import { useCallback, useState } from "react";

const MapSearchFilter = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilterClick = useCallback(() => {
    setIsFilterModalOpen(() => true);
  }, []);

  return (
    <>
      <button
        className="flex items-center gap-2 rounded-xl border-2 border-primary text-primary px-4 py-2 font-peyda-semibold"
        onClick={handleFilterClick}
      >
        <Image
          src="images/map/filter.svg"
          alt="Filter Icon"
          width={24}
          height={24}
        />
        فیلتر
      </button>
      {isFilterModalOpen && (
        <NavbarFilterModal onClose={setIsFilterModalOpen} />
      )}
    </>
  );
};

export default MapSearchFilter;
