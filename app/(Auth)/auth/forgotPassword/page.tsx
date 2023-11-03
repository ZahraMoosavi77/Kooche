"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  supabase,
  AuthErrors,
  AuthPasswordGuid,
} from "@/index";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const Page = () => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
  const [isValueValideted, setIsValueValideted] = useState<boolean | "-">("-");
  const [isConfirmValideted, setIsConfirmValideted] = useState<boolean | "-">(
    "-"
  );

  const onInputHandler = (e) => {
    setValue(e.target.value.trim());
    if (!passReg.test(e.target.value)) setIsValueValideted(false);
    else setIsValueValideted(true);
  };

  const onConfirmHandler = (e) => {
    if (value !== e.target.value) {
      setIsConfirmValideted(false);
    } else setIsConfirmValideted(true);
    setConfirm((prev) => e.target.value.trim());
  };

  const onSubmitHandler = async () => {
    if (value === confirm && passReg.test(value)) {
      const { data, error } = await supabase.auth.updateUser({
        password: value,
      });
      setConfirm("");
      setValue("");
      router.push("/auth");
      console.log(error);
      console.log(console.log(data));
    } else {
      setIsConfirmValideted(false);
      setIsValueValideted(false);
    }
  };

  const firstIcon = (
    <Image
      src={"/images/auth/Lock.svg"}
      width={24}
      height={24}
      alt="lock icon"
    />
  );
  const firstIcon2 = (
    <Image
      src={"/images/auth/Lock.svg"}
      width={24}
      height={24}
      alt="lock icon"
    />
  );

  return (
    <Form
      title="ساخت رمز عبور جدید"
      caption="رمز عبور جدید خود را وارد و سپس تایید کنید"
    >
      <div>
        <Input
          firstIcon={firstIcon}
          element="input"
          type="password"
          id="password"
          label="رمز عبور"
          onInputHandler={onInputHandler}
          value={value}
          className="share-inputs"
          validation={isValueValideted}
        />
        <AuthErrors
          validation={isValueValideted}
          error={"رمز عبور را به درستی انتخاب کنید"}
          src={"/images/Auth/Circle_Warning.svg"}
          width={24}
          height={24}
          alt={"circle warning"}
        />
        <AuthPasswordGuid />
      </div>
      <div>
        <Input
          label="تکرار رمز عبور"
          firstIcon={firstIcon2}
          element="input"
          type="password"
          id="password"
          onInputHandler={onConfirmHandler}
          value={confirm}
          className="share-inputs"
          validation={isConfirmValideted}
        />
        <AuthErrors
          validation={isConfirmValideted}
          error={"عدم تطابق"}
          src={"/images/Auth/Circle_Warning.svg"}
          width={24}
          height={24}
          alt={"circle warning"}
        />
      </div>
      <div className="space-maker" />
      <div className="form-buttons_container">
        <Link className="hidden md:block" href={"/auth"}>
          <span className="back-button">قبلی</span>
        </Link>
        <Button
          onClickHandler={onSubmitHandler}
          text="تمام"
          className="w-full md:w-9/12 share-buttons"
        />
      </div>
    </Form>
  );
};

export default Page;
