"use client";
import { supabase, Form, Input, Button, useGlobalContext } from "@/index";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const page = () => {
  let { setMail } = useGlobalContext();
  const router = useRouter();
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");

  const [isValidate, setIsValidate] = useState(false);

  const onInputHandler = (e) => {
    setValue(e.target.value);
    setMail(e.target.value);
    if (emailReg.test(value)) setIsValidate(true);
    else setIsValidate(false);
  };

  const onSubmitHandler = () => {
    if (isSignedUp) router.push("loginOrSignup/passwordlogin");
    else router.push("loginOrSignup/passwordsignup");
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const {
        data: { users },
        error,
      } = await supabase.auth.admin.listUsers();
      setAllUsers(users);
    };

    getAllUsers();

    if (
      allUsers &&
      allUsers.some(
        (item) => item.email.toLocaleLowerCase() === value.toLocaleLowerCase()
      )
    )
      setIsSignedUp(true);
    else {
      setIsSignedUp(false);
    }
  }, [value]);

  const firstIcon = (
    <Image src="/images/auth/Mail.svg" width={24} height={24} alt="mail icon" />
  );

  return (
    <Form
      title="ورود یا ثبت‌نام"
      caption="برای ورود یا ثبت‌نام آدرس ایمیل خود را وارد کنید"
    >
      <div>
        <Input
          firstIcon={firstIcon}
          label="ورود یا ثبت‌نام"
          element="input"
          type="email"
          id="email"
          onInputHandler={onInputHandler}
          className="w-11/12 share-inputs "
        />
      </div>
      w-9/12 flex justify-center px-4 py-2 gap-2 rounded-[12px] bg-primary
      font-peyda-semibold text-scales-default leading-5 text-white
      <Button
        text="بعدی"
        className="w-full share-buttons "
        src="/images/auth/Arrow_Left_LG.svg"
        alt="arrow left"
        iconHeight={24}
        iconWidth={24}
        onClickHandler={() => isValidate && onSubmitHandler()}
      />
    </Form>
  );
};

export default page;
