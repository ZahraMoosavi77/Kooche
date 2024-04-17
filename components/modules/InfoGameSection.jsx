"use client";
import AddImage from "@/components/elements/new/AddImage";
import TextFieldNewPage from "@/components/elements/new/TextFieldNewPage";
import SubTitleNewPage from "@/components/elements/new/SubTitleNewPage";
import { SEARCH, infoGame } from "@/constants/constantNewPage";
import TitleNewPage from "@/components/elements/new/TitleNewPage";
import Optional from "@/components/elements/new/Optional";
import TextNewPage from "@/components/elements/new/TextNewPage";
import TextAreaNewPage from "../elements/new/TextAreaNewPage";
import SelectOptionsNewPage from "../elements/new/SelectOptionsNewPage";
import { CHOOSECONSOLE } from "@/constants/constantNewPage";

import { useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ErrorMessageNameOfGame,
  ErrorMessagePlatform,
} from "@/constants/constantNewPage";
import { NewContext } from "@/context/NewContext";
import BasicInput from "@/app_dev/_component_dev/Basic-Input/BasicInput";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import BaicTextArea from "@/app_dev/_component_dev/BasicTextArea/BasicTextArea";

export default function InfoGameSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [platforms, setPlatforms] = useState([]);
  const { values, isValidName, isValidPlatform } = useContext(NewContext);
  const getData = async () => {
    let { data, error } = await supabase.from("platforms").select("*");
    setPlatforms(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const c2 = clsx({
    "bg-accent-bgerror": errors.name,
    "bg-gray-200": !errors.name,
  });

  return (
    <div className=" flex flex-col gap-4 ">
      <div className=" flex flex-col gap-2">
        <TitleNewPage text={infoGame.INFOGAMETITLE} />
        <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <BasicInput
            register={register}
            name={"firstname"}
            className={c2}
            errors={errors}
            label={infoGame.GAMENAME}
            helpText={"اسم بازی را مطابق با مشخصات مندرج روی بسته کامل کنید."}
            errorText={"الزامی"}
          />
        </div>

        <div className="relative">
          <SelectOptionsNewPage
            column={"platformId"}
            validate={isValidPlatform}
            defualtValue={CHOOSECONSOLE}
            placeholderSearch={SEARCH}
            optionsGroup={platforms}
            errormessage={ErrorMessagePlatform}
            label={
              <div className="flex  ">
                <TextNewPage
                  specialClass={"pr-3"}
                  text={infoGame.GAMECONSOLE}
                />
              </div>
            }
          />
        </div>
        <div>
          <div className="flex  ">
            <TextNewPage
              specialClass={"pr-3"}
              text={infoGame.GAMEDESCRIPTION}
              type={"textarea"}
            />
            <Optional />
          </div>
          <BaicTextArea register={register} name="description" />
          {/* <TextAreaNewPage name={'moreInfo'} value={values.moreInfo} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} /> */}
        </div>
        <TextNewPage text={infoGame.GAMEIMAGES} />
        <AddImage />
        <button>send</button>
      </form>
    </div>
  );
}
