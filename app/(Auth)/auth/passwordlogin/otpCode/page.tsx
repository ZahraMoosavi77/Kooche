"use client";
import { Form,Input, Button } from "@/index";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <Form
      title="ثبت‌نام"
      caption="کد 6 رقمی که به ایمیل zahra.rezaei01@gmail.com  ارسال شد را وارد کنید"
    >
      <div>
        <Input
          label="کد تایید"
          element="input"
          type="password"
          id="password"
          onInputHandler={() => console.log("ok")}
          className="min-w-[300px] font-peyda-semibold text-scales-default bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={() => console.log("ok")}
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
