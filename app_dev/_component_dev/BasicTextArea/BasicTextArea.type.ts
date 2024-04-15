import { ChangeEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type BasicTextAreaProps = HTMLTextAreaElement & {
    className : string,
    onChangeHandler: ChangeEventHandler;
    register?:UseFormRegister<FieldValues>
};
