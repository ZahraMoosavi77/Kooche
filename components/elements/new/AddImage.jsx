
import TextNewPage from "./TextNewPage"
import { infoGame } from "@/constants/constantNewPage"
import Image from "next/image"
import addPlus from '../../../asset/icons/AddPlus.svg'
import { useState, useContext, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { v4 as uuidv4 } from 'uuid';
import { UseGlobalContext } from "@/context/AuthContext";
import { CDNURL } from "@/constants/constantNewPage"
import { NewContext } from "@/context/NewContext"

export default function AddImage() {

  const [fileName, setFileName] = useState('')
  const { id } = UseGlobalContext();
  const { file, setFile, setImageUrl } = useContext(NewContext);
  const [preview, setPreview] = useState([]);

  const handleSubmitImage = async () => {
    setFileName(`${uuidv4()}-${file.name}`);
    if(file.length)
    {

    
    const { data, error } = await supabase.storage
      .from("test")
      .upload(id + '/' + fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      setImageUrl(CDNURL + '/' + data.path)
    }
  }
  }

  useEffect(() => {
    handleSubmitImage();
  }, [file])

  const handleFileSelected = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]))
    e.target.value = "";
  };
  return (
    <div className="flex justify-start gap-3">
      {preview.length ?
        <Image className='border-1 border-primary-100 rounded-xl border-solid w-28 h-28' src={preview} width={110} height={110} alt="image" />
        : ''}
      <form className=' flex flex-col justify-center items-center border border-primary-100 rounded-xl border-solid w-28 h-28'>
        <input className="hidden" id="upload-img" type="file" name="image" accept="image/*, png,jpeg,jpg" onChange={handleFileSelected}>
        </input>
        <label htmlFor="upload-img" >
          <Image src={addPlus} width={40} height={40} alt="Add-Plus" />
        </label>
        <TextNewPage text={infoGame.GAMEIMAGE} />
      </form>
    </div>
  )
}
