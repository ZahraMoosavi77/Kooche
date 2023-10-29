"use client";
import { supabase, Form, Button, Input, UseGlobalContext } from "@/index";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const page = () => {
  const router = useRouter();
  const { mail, setIsLoggedIn } = UseGlobalContext();
  const [value, setValue] = useState("");
  const passAlarm = useRef(null);
  const loginAlarm = useRef(null);

  // const getMainUser = async () => {
  //   let { data: profiles, error } = await supabase
  //     .from("profiles")
  //     .select("id").eq()
  // };

  const onInputHandler = (e) => {
    setValue(e.target.value);
    if (!passReg.test(e.target.value)) passAlarm.current.style.display = "flex";
    else passAlarm.current.style.display = "none";
  };

  const onSubmitHandler = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: value,
    });
    if (error) {
      loginAlarm.current.style.display = "flex";
    } else {
      setIsLoggedIn(true);
      loginAlarm.current.style.display = "none";
      localStorage.setItem("user", JSON.stringify(data.user.id));
      setIsLoggedIn(true);
      router.push('/')
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

  const secondIcon = (
    <Image
      src={"/images/auth/Show.svg"}
      width={24}
      height={24}
      alt="hide icon"
    />
  );
  if (!mail) router.push("/auth");
  else
    return (
      <Form title="ورود" caption="رمز عبور خود را وارد کنید">
        <div>
          <Input
            firstIcon={firstIcon}
            secondIcon={secondIcon}
            label="رمز عبور"
            element="input"
            type="password"
            id="password"
            value={value}
            onInputHandler={onInputHandler}
            className="min-w-[300px] share-inputs"
          />
          <div
            ref={loginAlarm}
            className="hidden gap-1 items-center text-accent-error m-1 font-peyda-regular text-scales-default"
          >
            <Image
              src="/images/Auth/Circle_Warning.svg"
              width={24}
              height={24}
              alt="circle warning"
            />
            <span>ترکیب نام کاربری/ایمیل با پسوورد صحیح نیست</span>
          </div>
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
        <Button
          onClickHandler={onSubmitHandler}
          text="ورود"
          src="/images/auth/Arrow_Left_LG.svg"
          alt="Arrow Left"
          iconHeight={24}
          iconWidth={24}
          className="w-full share-buttons"
        />
        <Link href={"#"}>
          <span className=" block mx-2 text-scales-default font-peyda-semibold text-primary">
            فراموشی رمز عبور
          </span>
        </Link>
      </Form>
    );
};

export default page;
