import React from "react";
import Image from "next/image";

const Button = ({
  className,
  src,
  alt,
  iconWidth,
  iconHeight,
  text,
  onClickHandler,
}) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {text}
      <Image alt={alt!} width={iconWidth} height={iconHeight} src={src!} />
    </button>
  );
};

export default Button;
