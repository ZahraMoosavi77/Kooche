import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Button = ({
  className,
  onClickHandler,
  disabled,
  type,
  isLoading,
  children,
}) => {
  const buttonClassnames = clsx(
    "button",
    { "button-disabled": disabled },
    className
  );
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClickHandler}
      className={buttonClassnames}
    >
      {isLoading ? (
        <Image
          src={"/images/icons/three-dots-loading.svg"}
          alt="loading"
          width={24}
          height={24}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
