"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/index";
import { useRouter, usePathname } from "next/navigation";
import { sideMenuLinks } from "@/constants/Side-Menu/constants";
import Link from "next/link"; 

const SideMenu = ({setIsShow}) => {
  const router = useRouter();
  const pathName = usePathname().split("/");
  const primaryPath = pathName[1];

  const closeSideMenu = (e) => {
    setIsShow(false);
  };

  const onClickHandler = () => {
    router.push("/new");
  };

  return (
    <>
      {(
        <div className="flex lg:hidden w-screen min-h-screen fixed z-[999] left-0 top-0 bottom-0">
          <div className="flex flex-col bg-white w-[70%] max-w-[500px] h-full px-5 ">
            {/* <div className="w-full px-20 py-5 flex items-center justify-center"> */}
            <Image
              src={"/images/auth/auth-logo-mobile.png"}
              width={104}
              height={53}
              alt="Kooche's logo"
              className="justify-self-center mx-auto my-5"
            />
            {/* </div> */}
            <div className="flex flex-col">
              {sideMenuLinks.map(
                ({ title, src, srcActive, link, alt, url }, index) =>
                  primaryPath === url ? (
                    <Link href={link} key={index}>
                      <div className="flex items-center justify-start gap-2 py-2 text-primary">
                        <Image
                          src={`${srcActive}`}
                          width={24}
                          height={24}
                          alt={`${alt} icon`}
                        />
                        <span className="font-peyda-regular text-scales-large text-primary">
                          {title}
                        </span>
                        <Image
                          src={"images/side-menu/Chevron_Left_active.svg"}
                          width={24}
                          height={24}
                          alt="icon"
                          className="mr-auto"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link href={link} key={index}>
                      <div className="flex items-center justify-start gap-2 py-2 text-gray-900">
                        <Image
                          src={src}
                          width={24}
                          height={24}
                          alt={`${alt} icon`}
                        />
                        <span className="font-peyda-regular text-scales-large">
                          {title}
                        </span>
                        <Image
                          src={"images/side-menu/Chevron_Left.svg"}
                          width={24}
                          height={24}
                          alt="icon"
                          className="mr-auto"
                        />
                      </div>
                    </Link>
                  ),
              )}
              <Button
                className="mt-6 rounded-xl space-x-2 w-full px-2 py-4 bg-primary text-white font-peyda-regular text-scales"
                src=""
                iconWidth={24}
                iconHeight={24}
                alt="plus icon"
                text="ثبت آگهی"
                onClickHandler={onClickHandler}
              />
            </div>
          </div>
          <div onClick={closeSideMenu} className="bg-black/60 flex flex-1" />
        </div>
      )}
    </>
  );
};

export default SideMenu;
