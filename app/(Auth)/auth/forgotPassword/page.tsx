"use client";
import React, { useState } from "react";
import { Form, Input, Button, supabase } from "@/index";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const page = () => {
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
          className="min-w-[300px] share-inputs"
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
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={onSubmitHandler}
          text="تمام"
          className="w-9/12 share-buttons"
        />
        <Link href={"/auth"}>
          <span className="back-button">قبلی</span>
        </Link>
      </div>
    </Form>
  );
};

export default page;
