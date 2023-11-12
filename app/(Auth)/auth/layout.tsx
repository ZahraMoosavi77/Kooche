"use client";
import { BackButton } from "@/index";
import Image from "next/image";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <BackButton  />
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

export default layout;
