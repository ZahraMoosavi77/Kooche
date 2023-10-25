"use client";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
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
          className="min-w-[300px] font-psm text-base bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-row-reverse w-full justify-between items-center">
        <Button
          onClickHandler={() => console.log("ok")}
          text="بعدی"
          src="Arrow_Left_LG.svg"
          alt="Arrow Left"
          iconHeight={24}
          iconWidth={24}
          className="w-9/12 flex justify-center px-4 py-2 gap-2 rounded-[12px] bg-[#6D21E9] font-psb text-base leading-7 text-white"
        />
        <Link href={"#"}>
          <span className="w-3/12 block ms-5 text-base font-psb text-gray-800">
            قبلی
          </span>
        </Link>
      </div>
    </Form>
  );
};

export default page;
