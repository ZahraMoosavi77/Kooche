"use client";
import React from "react";

const Input = (props) => {
  const {
    element,
    type,
    className,
    label,
    firstIcon,
    secondIcon,
    placeholder,
    value,
    onInputHandler,
  } = props;

  const finalElement: React.ReactNode =
    element === "input" ? (
      <>
        <div className="w-full flex gap-2 bg-gray-200 rounded-[12px] px-2.5 py-3">
          {firstIcon}
          <input
            type={type}
            placeholder={placeholder || ""}
            className={className}
            value={value}
            onChange={onInputHandler}
          />
          {secondIcon}
        </div>
      </>
    ) : (
      <textarea
        placeholder={""}
        className={className}
        value={value}
        onChange={onInputHandler}
      ></textarea>
    );

  return (
    <div>
      <span className="block text-gray-900 font-pm mb-2.5">{label}</span>
      {finalElement}
    </div>
  );
};
export default Input;
