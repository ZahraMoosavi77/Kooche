"use client";
import {
  Form,
  Input,
  Button,
  UseGlobalContext,
  supabase,
  AuthErrors,
} from "@/index";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const otpReg = /^[0-9]{6}$/;

const Page = () => {
  const { mail } = UseGlobalContext();
  const router = useRouter();
  const [value, setvalue] = useState("");
  const [isValid, setIsValid] = useState<boolean | "-">("-");
  const [isCorrect, setIsCorrect] = useState<boolean | "-">("-");

  const onInputHandler = (e) => {
    setvalue((prev) => e.target.value);
    if (!otpReg.test(e.target.value)) setIsValid((prev) => false);
    else setIsValid((prev) => true);
  };

  const onClickHandler = async () => {
    const { error } = await supabase.auth.verifyOtp({
      email: mail,
      token: value,
      type: "recovery",
    });
    if (error) setIsCorrect(false);
    else router.push("/auth/forgotPassword");
  };

  return (
    <Form
      title="تایید کاربر"
      caption={`کد 6 رقمی را که به ایمیل ${mail}  ارسال شد  وارد کنید`}
    >
      <div>
        <Input
          label="کد تایید"
          element="input"
          type="password"
          id="password"
          value={value}
          onInputHandler={onInputHandler}
          className={`share-inputs`}
          validation={isCorrect}
        />
        <AuthErrors
          validation={isCorrect}
          error={"کد وارد شده صحیح نمی باشد"}
          src={"/images/Auth/Circle_Warning.svg"}
          width={24}
          height={24}
          alt={"circle warning"}
        />
        <AuthErrors
          validation={isValid}
          error={"کد باید یک عدد شش رقمی باشد"}
          src={"/images/Auth/Circle_Warning.svg"}
          width={24}
          height={24}
          alt={"circle warning"}
        />
      </div>
      <div className="space-maker" />
      <div className="form-buttons_container">
        <Link className="hidden md:block" href={"/auth/passwordlogin"}>
          <span className="back-button">قبلی</span>
        </Link>
        <Button
          onClickHandler={onClickHandler}
          text="بعدی"
          src="/images/auth/Arrow_Left_LG.svg"
          alt="Arrow Left"
          iconHeight={24}
          iconWidth={24}
          className="w-full md:w-9/12 share-buttons"
        />
      </div>
    </Form>
  );
};

export default Page;
