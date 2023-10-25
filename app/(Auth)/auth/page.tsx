"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/AuthContext";

const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxY3R3am51bnR4aWlmY215bGl5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzUzNTEwMywiZXhwIjoyMDEzMTExMTAzfQ.O3YnA0zn-VExOzwa49KB6L9oE3achQSOM3HPumHbOMQ";
const supabaseUrl = "https://rqctwjnuntxiifcmyliy.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

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
          className="w-11/12 font-psm text-base bg-transparent outline-none "
        />
      </div>

      <Button
        text="بعدی"
        className="w-full flex justify-center px-4 py-2 gap-2 rounded-[12px] bg-[#6D21E9] font-psb text-base leading-7 text-white "
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
