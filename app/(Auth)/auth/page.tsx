"use client";
import { supabase, Form, Input, Button, UseGlobalContext } from "@/index";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const page = () => {
  const { setMail } = UseGlobalContext();
  const router = useRouter();
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean | "-">("-");

  const onInputHandler = (e) => {
    setValue((prev) => e.target.value);
    setMail((prev) => e.target.value);
    if (emailReg.test(e.target.value)) {
      setIsValidate((prev) => true);
    } else setIsValidate((prev) => false);
  };

  const onSubmitHandler = () => {
    if (value && isValidate) {
      if (checkUserHandler()) {
        router.push("auth/passwordlogin");
      } else router.push("auth/passwordsignup");
    } else setIsValidate(false);
  };

  const checkUserHandler = () => {
    return (
      allUsers.length !== 0 &&
      allUsers.some(
        (item) => item.email.toLocaleLowerCase() === value.toLocaleLowerCase()
      )
    );
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
  }, []);

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
          label="ایمیل"
          element="input"
          type="text"
          id="email"
          value={value}
          onInputHandler={onInputHandler}
          className="w-11/12 share-inputs "
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
          <span>ایمیل معتبر نیست</span>
        </div>
      </div>

      <Button
        text="بعدی"
        className="w-full share-buttons "
        src="/images/auth/Arrow_Left_LG.svg"
        alt="arrow left"
        iconHeight={24}
        iconWidth={24}
        onClickHandler={onSubmitHandler}
      />
    </Form>
  );
};

export default page;
