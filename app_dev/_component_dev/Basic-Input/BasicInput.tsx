import React from "react";
import clsx from "clsx";
import { basicInputType } from "./BasicInput.type";
import styles from "./BasicInput.module.css";
import TextError from "@/components/elements/new/TextError";
import HelpText from "@/app/new/_components/Help-Text/HelpText";
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
  errors,
  label,
  helpText,
  errorText,
}: basicInputType) => {
  const inputClassNames = clsx(
    styles["basic-input__input"],
    { [styles["basic-input__input-readonly"]]: readOnly },
    { [styles["basic-input__error"]]: errors[name] },
    className
  );
  if (register) {
    //?? component & order of classname type placeholder
    return (
      <div>
        <div className="flex flex-col gap-1">
        <label className="text-scales-default font-peyda-regular leading-leading-3 text-gray-900 pr-3">
          {label}
        </label>
        <input
          autoComplete={autocomplete}
          className={inputClassNames}
          type={type}
          placeholder={placeholder}
          name={name}
          readOnly={readOnly}
          disabled={disabled}
          {...register(name, { required: errorText })}
        />
        <HelpText className={'pr-3'} text={helpText}/>
        {errors[name] && <TextError text={errorText} />}
        </div>
      </div>
    );
  } else {
    //??
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
