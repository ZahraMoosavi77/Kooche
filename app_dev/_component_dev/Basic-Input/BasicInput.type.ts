import { ChangeEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type basicInputType = HTMLInputElement & {
  className: string;
  onChangeHandler: ChangeEventHandler;
  register?: UseFormRegister<FieldValues>
  errors?:any
  label?:string
  helpText?:string
  errorText?:string
};
