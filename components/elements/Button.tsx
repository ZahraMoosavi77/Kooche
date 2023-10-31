import React from "react";
import Image from "next/image";
type ButtonProps = {className :string,
  src?:string,
  alt?:string,
  iconWidth?:number,
  iconHeight?:number,
  text?:string,
  onClickHandler?:Function,}
const Button = ({
  className,
  src,
  alt,
  iconWidth,
  iconHeight,
  text,
  onClickHandler,
}:ButtonProps) => {
  return (
    <button className={className} onClick={()=>onClickHandler()}>
      {text}
      {src && (
        <Image alt={alt!} width={iconWidth} height={iconHeight} src={src!} />
      )}
    </button>
  );
};

export default Button;
