"use client";
import Image from "next/image";
import NavbarLocationModal from "@/components/elements/NavbarLocationModal";
import { useCallback, useContext, useEffect, useState } from "react";
import { LocationContext } from "@/context/map/mapContext";
import { setUserLocation } from "@/utils/map/setUserLocation";
import { supabase } from "@/lib/supabase";

const NavbarLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const location = useContext(LocationContext);

  useEffect(() => {
    if (!localStorage.getItem("userLocation")) {
      setUserLocation();
    }
    const fetchData = async () => {
      let { data } = await supabase
        .from("provinces")
        .select(`name,id,cities(name,id)`)
        .order("name");

      setProvinces(data);
    };

    fetchData();
  }, []);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  if (!provinces) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button
        className="flex gap-2 items-center py-2 px-4"
        onClick={handleClick}
      >
        <Image
          src="/images/map/Map_Pin.svg"
          alt="Location"
          width={24}
          height={24}
        />
        <span className="text-gray-900 font-semibold leading-leading-2">
          {location.provinceName}, {location.cityName}
        </span>
      </button>
      {isModalOpen && (
        <NavbarLocationModal onClose={setIsModalOpen} provinces={provinces} />
      )}
    </>
  );
};

export default NavbarLocation;
