"use client";
import { Form, Input, UseGlobalContext, Button, supabase } from "@/index";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const page = () => {
  const router = useRouter();
  const { mail, setIsLoggedIn } = UseGlobalContext();
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");
  const passAlarm = useRef(null);
  const confirmAlarm = useRef(null);

  const onInputHandler = (e) => {
    setValue(e.target.value.trim());
    if (!passReg.test(e.target.value)) passAlarm.current.style.display = "flex";
    else passAlarm.current.style.display = "none";
  };

  const onConfirmHandler = (e) => {
    if (value !== e.target.value) {
      confirmAlarm.current.style.display = "flex";
    } else confirmAlarm.current.style.display = "none";
    setConfirm(e.target.value.trim());
  };

  const onSubmitHandler = async () => {
    if (value === confirm && passReg.test(value)) {
      const { data, error } = await supabase.auth.signUp({
        email: mail,
        password: value,
        options: {},
      });
      localStorage.setItem("user", JSON.stringify(data.user.id));
      setIsLoggedIn(true);
      setConfirm("");
      setValue("");
      router.push("/");
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
        title="ثبت‌نام"
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
            className="min-w-[300px] share-inputs"
          />
          <div
            ref={passAlarm}
            className="hidden gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default"
          >
            <Image
              src="/images/Auth/Circle_Warning.svg"
              width={24}
              height={24}
              alt="circle warning"
            />
            <span>رمز عبور را به درستی انتخاب کنید</span>
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
            className="min-w-[300px] share-inputs"
          />
          <div
            ref={confirmAlarm}
            className="hidden gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default"
          >
            <Image
              src="/images/Auth/Circle_Warning.svg"
              width={24}
              height={24}
              alt="circle warning"
            />
            <span>عدم تطابق</span>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full justify-between items-center">
          <Button
            onClickHandler={onSubmitHandler}
            text="بعدی"
            src="/images/auth/Arrow_Left_LG.svg"
            alt="Arrow Left"
            iconHeight={24}
            iconWidth={24}
            className="w-9/12 share-buttons"
          />
          <Link href={"#"}>
            <span className="back-button">قبلی</span>
          </Link>
        </div>
      </Form>
    );
};

export default page;
