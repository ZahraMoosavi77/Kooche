"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "@/index";
import {supabase} from "@/lib/supabase"
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
        <div
          className={`${
            isValueValideted ? "hidden" : "flex"
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
        <div className="w-full mt-2">
          <span className="text-gray-700 font-peyda-regular text-scales-caption">
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
          className="share-inputs"
          validation={isConfirmValideted}
        />
        <div
          className={`${
            isConfirmValideted ? "hidden" : "flex"
          } gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default`}
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
      <div className="md:hidden flex flex-col grow" />
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={onSubmitHandler}
          text="تمام"
          className="w-full md:w-9/12 share-buttons"
        />
        <Link className="hidden md:block" href={"/auth"}>
          <span className="back-button">قبلی</span>
        </Link>
      </div>
    </Form>
  );
};

export default Page;
