import { ChangeEventHandler } from "react";

export type basicInputType = HTMLInputElement & {
  className: string;
  onChangeHandler: ChangeEventHandler;
  register?:any
};
