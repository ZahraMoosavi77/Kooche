import Image from "next/image";
import React from "react";

const AuthErrors = ({ src, width, height, alt, validation, error }) => {
  return (
    <div className={`${validation ? "hidden" : "flex"} auth_pages--error`}>
      {src && <Image src={src} width={width} height={height} alt={alt} />}
      <span>{error}</span>
    </div>
  );
};

export default AuthErrors;
