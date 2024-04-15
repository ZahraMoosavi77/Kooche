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

import {  useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ErrorMessageNameOfGame,
  ErrorMessagePlatform,
} from "@/constants/constantNewPage";
import { NewContext } from "@/context/NewContext";
import BasicInput from "@/app_dev/_component_dev/Basic-Input/BasicInput";
import { useForm } from "react-hook-form";
import clsx from "clsx";

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
  `${errors.name ? "bg-accent-error" : "bg-gray-200"} text-gray-900  border-gray-200  mt-1 focus:text-primary focus:bg-white  focus:border-primary`
  const c2 = clsx({
    'bg-accent-error': errors.name,
    'bg-gray-200': !errors.name,
    'text-gray-900': true, 
    'border-gray-200': true,
    'mt-1': true,
    'focus:text-primary': true,
    'focus:bg-white': true,
    'focus:border-primary': true
  });
  console.log(Object.keys(errors).length);
  const cls = clsx({ "text-accent-error-text": errors });
  return (
    <div className=" flex flex-col gap-4 ">
      <div className=" flex flex-col gap-2">
        <TitleNewPage text={infoGame.INFOGAMETITLE} />
        <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <TextNewPage specialClass={'pr-3'} text={infoGame.GAMENAME} />
          <BasicInput
            register={register}
            name={"name"}
            className={c2}
          />
          {errors.name && <span className={cls}>{errors.name.message}</span>}
          <BasicInput
            register={register}
            name={"family"}
            className={c2}
          />
           {errors.family && <span className={cls}>{errors.family.message}</span>}
        </div>
        <button>send</button>
      </form>
      <div className='relative'>
                <SelectOptionsNewPage 
                column={'platformId'}
                 validate={isValidPlatform}
                    defualtValue={CHOOSECONSOLE}
                     placeholderSearch={SEARCH} 
                     optionsGroup={platforms} 
                     errormessage={ErrorMessagePlatform}
                     label={<div className='flex  '>
                        <TextNewPage specialClass={'pr-3'} text={infoGame.GAMECONSOLE} />
                    </div>} />
            </div>
            <div >
           
                <TextAreaNewPage name={'moreInfo'} value={values.moreInfo} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} />

            </div>
            <TextNewPage text={infoGame.GAMEIMAGES} />
            <AddImage />
    </div>
  );
}
