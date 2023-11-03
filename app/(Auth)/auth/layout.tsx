import Image from "next/image";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="auth_layout--container">
      <div className=".auth_layout--btn-container">
        <Image
          src={"/images/auth/Arrow_Right_MD.svg"}
          width={24}
          height={24}
          alt="arrow right"
        />
        <span>بازگشت</span>
      </div>
      <div className="auth_layout--logo-container">
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
