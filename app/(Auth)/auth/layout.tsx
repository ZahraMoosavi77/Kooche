import Image from "next/image";
import React from "react";

type Props = {};

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="self-start pt-6 pr-6 flex md:hidden gap-1.5 text-gray-800 font-peyda-semibold text-scales-default">
        <Image
          src={"/images/auth/Arrow_Right_MD.svg"}
          width={24}
          height={24}
          alt="arrow right"
        />
        <span>بازگشت</span>
      </div>
      <div className="flex md:hidden justify-center ml-8 my-10">
        <Image
          src={"/images/auth/auth-logo-mobile.png"}
          width={156}
          height={80}
          alt="logo"
        />
      </div>
      {children}
    </div>
  );
};

export default Layout;
