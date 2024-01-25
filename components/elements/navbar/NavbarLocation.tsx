"use client";
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LocationContext, NavbarLocationModal, setUserLocation } from "@/index";

const NavbarLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const location = useContext(LocationContext);

  useEffect(() => {
    if (!localStorage.getItem("userLocation")) {
      const defaultLocation:UserLocation = {
        cityName: "تهران",
        provinceName: "تهران",
        cityCenter: [35.6892523, 51.3896004],
      };
      setUserLocation(defaultLocation);
    }
    const fetchData = async () => {
      let { data } = await supabase
        .from("provinces")
        .select(`name,id,cities(name,id,center)`)
        .order("name");

      setProvinces(data);
    };

    fetchData();
  }, []);

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (!provinces) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button
        className="flex p-2 md:gap-2 items-center md:px-4 "
        onClick={handleOpen}
        title={`${location.provinceName}, ${location.cityName}`}
      >
        <Image
          src="/images/map/Map_Pin.svg"
          alt="Location"
          width={32}
          height={32}
          className="md:w-6 md:h-6"
        />

        <span className="text-gray-900 hidden md:inline font-semibold leading-leading-2">
          {location.provinceName}, {location.cityName}
        </span>
      </button>
      {isModalOpen && (
        <NavbarLocationModal onClose={handleClose} provinces={provinces} />
      )}
    </>
  );
};

export default NavbarLocation;
