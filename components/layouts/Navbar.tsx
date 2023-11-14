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
  const { setIsLoggedIn, setId } = UseGlobalContext();

  useEffect(() => {
    const ckeckUserIsLogin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      console.log(user.id);

      if (user) {
        setId(user.id);
        setIsLoggedIn(true);
      } else {
        setId("");
        setIsLoggedIn(false);
      }
      if (error) console.log(error);
    };
  }, []);

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

        <div className="hidden gap-4 mr-auto lg2:flex">
          <Link href={"/"}>آگهی‌ها</Link>
          <Link href={"/"}>نقشه</Link>
          <Link href={"/"}>ارتباط با ما</Link>
          <Link href={"/auth"}> ورود / ثبت نام</Link>
          <Link href={"/new"} className="">
            ثبت آگهی
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
