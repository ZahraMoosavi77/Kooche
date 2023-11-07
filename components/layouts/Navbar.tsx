import MapSearch from "@/components/elements/map/MapSearch";
import Image from "next/image";
import NavbarLocation from "@/components/elements/NavbarLocation";
import Link from "next/link";
import "@/styles/navbar/navbar.modules.css";
import NavbarSearchTags from "@/components/elements/NavbarSearchTags";
import NavbarResultNumber from "@/components/elements/NavbarResultNumber";
import { headers } from "next/headers";

const Navbar = () => {
  return (
    <div className="px-[108px] py-5">
      <div className=" flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="/" className="flex">
            <Image
              src="/images/map/Logo.svg"
              alt="Logo"
              width={88}
              height={45}
            />
          </Link>
          <NavbarLocation />
          <MapSearch />
        </div>
        <div className="flex gap-4">
          <Link href={"/"}>آگهی‌ها</Link>
          <Link href={"/"}>نقشه</Link>
          <Link href={"/"}>ارتباط با ما</Link>
          <Link href={"/auth"}> ورود / ثبت نام</Link>
          <Link href={"/new"} className="">
            ثبت آگهی
          </Link>
        </div>
      </div>
      <div className="pr-[104px]">
        <NavbarSearchTags />
        <NavbarResultNumber />
      </div>
    </div>
  );
};

export default Navbar;
