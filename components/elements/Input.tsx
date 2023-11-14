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
    validation,
  } = props;

  const finalElement: React.ReactNode =
    element === "input" ? (
      <>
        <div
          className={`w-full flex gap-2  ${
            validation ? "bg-gray-200" : "bg-accent-error"
          } rounded-[12px] px-2.5 py-3`}
        >
          <div className="min-w-fit min-h-fit self-start">{firstIcon}</div>
          <input
            type={type}
            placeholder={placeholder || ""}
            className={className}
            value={value}
            onChange={onInputHandler}
          />
          <div className="min-w-fit min-h-fit self-end">{secondIcon}</div>
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
      <span className="block text-gray-900 font-peyda-medium mb-2.5">
        {label}
      </span>
      {finalElement}
    </div>
  );
};
export default Input;
