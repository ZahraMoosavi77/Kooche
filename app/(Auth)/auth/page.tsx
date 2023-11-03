"use client";
import {
  supabase,
  Form,
  Input,
  Button,
  UseGlobalContext,
  AuthErrors,
} from "@/index";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Auth = () => {
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
          className="share-inputs "
          validation={isValidate}
        />
        <AuthErrors
          src={"/images/Auth/Circle_Warning.svg"}
          width={24}
          height={24}
          alt={"circle warning"}
          error={"ایمیل معتبر نیست"}
          validation={isValidate}
        />
        <div className="auth_page--conditions-text">
          با ورود به کوچه، تمام{" "}
          <span className="auth_page--conditions-link">
            شرایط و قوانین کوچه
          </span>{" "}
          را می‌پذیرم
        </div>
      </div>
      <div className="space-maker" />
      <Button
        text="بعدی"
        className="w-full share-buttons"
        src="/images/auth/Arrow_Left_LG.svg"
        alt="arrow left"
        iconHeight={24}
        iconWidth={24}
        onClickHandler={onSubmitHandler}
      />
    </Form>
  );
};

export default Auth;
