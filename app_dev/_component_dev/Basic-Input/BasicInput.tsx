import React from "react";
import clsx from "clsx";
import { basicInputType } from "./BasicInput.type";

const BasicInput: React.FC = ({
  placeholder,
  onChangeHandler,
  value,
  name,
  className,
  readOnly = false,
  disabled,
  type = "text",
  autocomplete,
}: basicInputType) => {
  const inputClassNames = clsx(
    "basic-input__input",
    { "basic-input__input-readonly": readOnly },
    className
  );

  return (
    <input
      autoComplete={autocomplete}
      className={inputClassNames}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
      name={name}
      value={value || ""}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};

export default BasicInput;
