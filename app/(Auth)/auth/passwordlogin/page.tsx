"use client";
import { supabase, Form, Button, Input, UseGlobalContext } from "@/index";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const Page = () => {
  const router = useRouter();
  const { mail, setIsLoggedIn } = UseGlobalContext();
  const [value, setValue] = useState("");
  const [isValidate, setIsValidate] = useState<boolean | "-">("-");
  const [isCorrect, setIsCorrect] = useState<boolean | "-">("-");
  const [clickedForgot, setClickedForgot] = useState<boolean>(false);

  const onInputHandler = (e) => {
    setValue(e.target.value);
    if (!passReg.test(e.target.value)) setIsValidate(false);
    else setIsValidate(true);
  };

  const onSubmitHandler = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: value,
    });
    if (error) {
      setIsCorrect(false);
    } else {
      setIsLoggedIn(true);
      setIsCorrect(true);
      localStorage.setItem("user", JSON.stringify(data.user.id));
      router.push("/");
    }
  };

  const forgotPasswordHandler = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(mail);
    localStorage.setItem("mail", JSON.stringify(mail));
    setClickedForgot(true);
    router.push("/auth/otpCode");
  };

  const firstIcon = (
    <Image
      src={"/images/auth/Lock.svg"}
      width={24}
      height={24}
      alt="lock icon"
    />
  );

  const secondIcon = (
    <Image
      src={"/images/auth/Show.svg"}
      width={24}
      height={24}
      alt="hide icon"
    />
  );
  if (!mail) router.push("/auth");
  else
    return (
      <Form title="ورود" caption="رمز عبور خود را وارد کنید">
        <div>
          <Input
            firstIcon={firstIcon}
            secondIcon={secondIcon}
            label="رمز عبور"
            element="input"
            type="password"
            id="password"
            value={value}
            onInputHandler={onInputHandler}
            className={`share-inputs`}
            validation={isValidate}
          />
          <div
            className={`${
              isValidate ? "hidden" : "flex"
            } gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default`}
          >
            <Image
              src="/images/Auth/Circle_Warning.svg"
              width={24}
              height={24}
              alt="circle warning"
            />
            <span>رمز عبور را به درستی انتخاب کنید</span>
          </div>
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
            <span> ترکیب نام کاربری/ایمیل با پسوورد صحیح نیست</span>
          </div>
        </div>
        <div className="md:hidden flex flex-col grow" />
        <Button
          onClickHandler={onSubmitHandler}
          text="ورود"
          className="w-full share-buttons"
        />
        <div className="self-center">
          {clickedForgot ? (
            <span className=" block mx-2 text-scales-small md:text-scales-default font-peyda-semibold text-primary">
              ایمیل درخواست تغیر رمز عبور برای شما ارسال گردید
            </span>
          ) : (
            <div onClick={forgotPasswordHandler}>
              <span className="cursor-pointer block mx-2 text-scales-default font-peyda-semibold text-primary">
                فراموشی رمز عبور
              </span>
            </div>
          )}
        </div>
      </Form>
    );
};

export default Page;
