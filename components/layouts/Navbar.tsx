"use client";
import MapSearch from "@/components/elements/navbar/MapSearch";
import Image from "next/image";
import NavbarLocation from "@/components/elements/navbar/NavbarLocation";
import Link from "next/link";
import "@/styles/navbar/navbar.modules.css";
import NavbarSearchTags from "@/components/elements/navbar/NavbarSearchTags";
import NavbarResultNumber from "@/components/elements/navbar/NavbarResultNumber";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hooks/useWindowSize";
import SideMenu from "../templates/side-menu";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { UseGlobalContext } from "@/context/AuthContext";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const { width } = useWindowSize();
  const path = usePathname();
  const { id, isLoggedIn, setIsLoggedIn, setId } = UseGlobalContext();
  
  return (
    <div
      className={`px-2.5 py-1 md:px-[56px] xl:px-[108px] ${
        path !== "/" && "hidden md:block"
      } md:py-5`}
    >
      <div className={`flex items-center justify-between gap-4`}>
        <button
          onClick={() => setIsShow((prev) => true)}
          className="lg2:hidden p-2"
        >
          <Image
            src="/images/map/Hamburger_LG.svg"
            alt="Hamburger"
            width={32}
            height={32}
          />
        </button>
        <Link href="/" className="order-1 md:order-[0]">
          <Image
            src="/images/map/Logo.svg"
            alt="Logo"
            width={88}
            height={45}
            className="w-[72px] h-[36px] md:w-[88px] md:h-[45px]"
          />
        </Link>
        <NavbarLocation />
        {path === "/" && <MapSearch />}

        <div className="hidden gap-4 mr-auto lg:flex items-center">
          <Link className="navbar-link" href={"/"}>
            آگهی‌ها
          </Link>
          <Link className="navbar-link" href={"/"}>
            نقشه
          </Link>
          <Link className="navbar-link" href={"/"}>
            ارتباط با ما
          </Link>
          {/*  */}
          {isLoggedIn ? (
            <Image
              src={"/images/side-menu/User_02-nav.svg"}
              width={32}
              height={32}
              alt="account"
              className="cursor-pointer"
            />
          ) : (
            <Link className="navbar-link" href={"/auth"}>
              ورود / ثبت نام
            </Link>
          )}
          <Link className="bg-primary px-4 py-2 rounded-xl" href={"/new"}>
            <button className="w-full h-full flex gap-2">
              <Image src={"/images/side-menu/Add_Plus.svg"} height={24} width={24} alt="add / plus" />
              <span className="navbar-link text-white">ثبت آگهی</span>
            </button>
          </Link>
        </div>
      </div>
      {path === "/" && (
        <div className="md:pr-[40px] md2:pr-[104px]">
          <NavbarSearchTags />
          <NavbarResultNumber />
        </div>
      )}
      {isShow && <SideMenu setIsShow={setIsShow} />}
    </div>
  );
};

export default Navbar;
