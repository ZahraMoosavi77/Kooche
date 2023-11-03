"use client";
import {
  supabase,
  Form,
  Input,
  Button,
  UseGlobalContext,
  AuthErrors,
  emailTester,
  checkUserValidation,
} from "@/index";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Auth = () => {
  const { setMail } = UseGlobalContext();
  const router = useRouter();
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean | "-">("-");

  const onInputHandler = (e) => {
    setValue((prev) => e.target.value);
    setMail((prev) => e.target.value);
    if (emailTester(e.target.value)) {
      setIsValidate((prev) => true);
    } else setIsValidate((prev) => false);
  };

  const onSubmitHandler = () => {
    if (value && isValidate) {
      if (checkUserValidation(allUsers, "email", value)) {
        router.push("auth/passwordlogin");
      } else router.push("auth/passwordsignup");
    } else setIsValidate(false);
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

  const mailIcon = (
    <Image src="/images/auth/Mail.svg" width={24} height={24} alt="mail icon" />
  );

  return (
    <Form
      title="ورود یا ثبت‌نام"
      caption="برای ورود یا ثبت‌نام آدرس ایمیل خود را وارد کنید"
    >
      <div>
        <Input
          firstIcon={mailIcon}
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
