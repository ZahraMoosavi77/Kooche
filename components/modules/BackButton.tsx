import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};
// pr-6
const BackButton = ({specialClass}) => {
    const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className={`cursor-pointer  self-start pt-6  ${specialClass} 
       flex md:hidden gap-1.5 text-gray-800 font-peyda-semibold text-scales-default`}
    >
      <Image
        src={"/images/auth/Arrow_Right_MD.svg"}
        width={24}
        height={24}
        alt="arrow right"
      />
      <span>بازگشت</span>
    </div>
  );
};

export default BackButton;
