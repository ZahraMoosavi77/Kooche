"use client";
import { Form, Input, Button, UseGlobalContext, supabase } from "@/index";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const otpReg = /^[0-9]{6}$/;

const page = () => {
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
    const { user, session, error } = await supabase.auth.verifyOtp({
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
          className={` min-w-[300px] share-inputs`}
          validation={isCorrect}
        />
        <div
          className={`${
            isCorrect ? "hidden" : "flex"
          } gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default`}
        >
          <Image
            src="/images/Auth/Circle_Warning.svg"
            width={24}
            height={24}
            alt="circle warning"
          />
          <span>کد وارد شده صحیح نمی باشد</span>
        </div>
        <div
          className={`${
            isValid ? "hidden" : "flex"
          } gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default`}
        >
          <Image
            src="/images/Auth/Circle_Warning.svg"
            width={24}
            height={24}
            alt="circle warning"
          />
          <span>کد باید یک عدد شش رقمی باشد</span>
        </div>
      </div>
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={onClickHandler}
          text="بعدی"
          src="/images/auth/Arrow_Left_LG.svg"
          alt="Arrow Left"
          iconHeight={24}
          iconWidth={24}
          className="w-9/12 share-buttons"
        />
        <Link href={"/auth/passwordlogin"}>
          <span className="back-button">قبلی</span>
        </Link>
      </div>
    </Form>
  );
};

export default page;
