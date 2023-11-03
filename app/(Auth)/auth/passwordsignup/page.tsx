"use client";
import {
  Form,
  Input,
  UseGlobalContext,
  Button,
  supabase,
  AuthErrors,
} from "@/index";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const Page = () => {
  const router = useRouter();
  const { mail, setIsLoggedIn } = UseGlobalContext();
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");
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
      const { data, error } = await supabase.auth.signUp({
        email: mail,
        password: value,
        options: {
          data: {
            password: value,
            mail,
          },
        },
      });
      localStorage.setItem("user", JSON.stringify(data.user.id));
      console.log(error);

      await setIsLoggedIn(true);
      setConfirm("");
      setValue("");
      router.push("/");
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
  if (!mail) router.push("/auth");
  else
    return (
      <Form
        title="ساخت رمز عبور"
        caption="برای حساب کاربری خود رمز عبور تعریف کنید و آن را در بخش بعد تکرار کنید"
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
          \
          <AuthErrors
            validation={isValueValideted}
            error={"رمز عبور را به درستی انتخاب کنید"}
            src={"/images/Auth/Circle_Warning.svg"}
            width={24}
            height={24}
            alt={"circle warning"}
          />
          <div className="mt-2">
            <span className="password-signup_password-guid">
              رمز عبور باید حداقل شامل 8 کاراکتر، یک حرف بزرگ، یک حرف کوچک و عدد
              باشد
            </span>
          </div>
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
            className={`share-inputs`}
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
