import React, { useState } from "react";
import clsx from "clsx";
import { basicInputType } from "./BasicInput.type";
import styles from "./BasicInput.module.css";
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
  register,
}: basicInputType) => {
  const inputClassNames = clsx(
    styles["basic-input__input"],
    { [styles["basic-input__input-readonly"]]: readOnly },
    className
  );

  if (register) {
    return (
      <input
        autoComplete={autocomplete}
        className={inputClassNames}
        type={type}
        placeholder={placeholder}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        {...register(name, { required: "الزامی" })}
      />
    );
  } else {
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
  }
};

export default BasicInput;
