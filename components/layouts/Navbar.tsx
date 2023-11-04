import MapSearch from "@/components/elements/map/MapSearch";
import Image from "next/image";
import NavbarLocation from "@/components/elements/NavbarLocation";
import Link from "next/link";
import "@/styles/navbar/navbar.modules.css";

const Navbar = () => {
  return (
    <div className="px-[108px] py-5 flex items-center justify-between">
      <div className="flex gap-4">
        <Link href="/" className="flex">
          <Image src="/images/map/Logo.svg" alt="Logo" width={88} height={45} />
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
          {" "}
          ثبت آگهی
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
