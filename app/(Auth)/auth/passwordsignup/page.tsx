"use client";
import { Form, Input, useGlobalContext, Button, supabase } from "@/index";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { mail } = useGlobalContext();
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");

  const onInputHandler = (e) => {
    setValue(e.target.value.trim());
  };

  const onConfirmHandler = (e) => {
    setConfirm(e.target.value.trim());
  };

  const onSubmitHandler = async () => {
    if (value === confirm) {
      const { error } = await supabase.auth.signUp({
        email: mail,
        password: value,
        options: {
          data: {
            phone: "09185835992",
          },
        },
      });

      setConfirm("");
      setValue("");
      router.push("/");
    }
  };

  const firstIcon = (
    <Image src={"/images/auth/Lock.svg"} width={24} height={24} alt="lock icon" />
  );
  const firstIcon2 = (
    <Image src={"/images/auth/Lock.svg"} width={24} height={24} alt="lock icon" />
  );
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
          className="min-w-[300px] font-peyda-semibold text-scales-default bg-transparent outline-none"
        />
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
          className="min-w-[300px] font-peyda-semibold text-scales-default bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={onSubmitHandler}
          text="بعدی"
          src="/images/auth/Arrow_Left_LG.svg"
          alt="Arrow Left"
          iconHeight={24}
          iconWidth={24}
          className="w-9/12 flex justify-center px-4 py-2 gap-2 rounded-[12px] bg-primary font-peyda-semibold text-scales-default leading-5 text-white"
        />
        <Link href={"#"}>
          <span className="w-3/12 block ms-5 text-scales-default font-peyda-semibold text-gray-800">
            قبلی
          </span>
        </Link>
      </div>
    </Form>
  );
};

export default page;