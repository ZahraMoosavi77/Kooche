"use client";
import { supabase, Form, Button, Input, useGlobalContext } from "@/index";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const { mail, setIsLoggedIn } = useGlobalContext();
  const [value, setValue] = useState("");

  // const getMainUser = async () => {
  //   let { data: profiles, error } = await supabase
  //     .from("profiles")
  //     .select("id").eq()
  // };

  const onInputHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = async () => {
    const { data,error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: value,
    });
    if (error) {
      console.log(error);
    } else {
      setIsLoggedIn(true);
      console.log(data);
      
    }
  };

  const firstIcon = (
    <Image src={"/images/auth/Lock.svg"} width={24} height={24} alt="lock icon" />
  );

  const secondIcon = (
    <Image src={"/images/auth/Show.svg"} width={24} height={24} alt="hide icon" />
  );

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
          className="min-w-[300px] font-psm text-base bg-transparent outline-none"
        />
      </div>
      <Button
        onClickHandler={onSubmitHandler}
        text="ورود"
        src="/images/auth/Arrow_Left_LG.svg"
        alt="Arrow Left"
        iconHeight={24}
        iconWidth={24}
        className="w-full flex justify-center px-4 py-2 gap-2 rounded-[12px] bg-[#6D21E9] font-psb text-base leading-7 text-white"
      />
      <Link href={"#"}>
        <span className=" block mx-2 text-base font-psb text-[#6D21E9]">
          فراموشی رمز عبور
        </span>
      </Link>
    </Form>
  );
};

export default page;
