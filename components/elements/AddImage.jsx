
import TextNewPage from "./TextNewPage"
import { infoGame } from "@/constants/constantNewPage"
import Image from "next/image"
import addPlus from '../../asset/icons/AddPlus.svg'
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import ShowImage from '../elements/ShowImage'
export default function AddImage() {


  const [file, setFile] = useState([]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("okkk");
    // const fileName = `${uuidv4()}-${file.name}`;
    const fileName = file.name;
    // console.log(fileName);
    // console.log(file);

    const { data, error } = await supabase.storage
      .from("test")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (data) {
      // getImages();
      console.log(data);
      console.log('data');
    } else {
      console.log(error);
    }

  }
  const handleFileSelected = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    
    e.target.value = "";
   
    

  };
  return (

    <div className="flex justify-start gap-3">
      {file.length ? 
        <Image  className='border-1 border-primary-100 rounded-xl border-solid w-28 h-28' src={file} width={110} height={110} alt="image" />
      : ''}
      <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center border border-primary-100 rounded-xl border-solid w-28 h-28'>
        <input className="hidden" id="upload-img" type="file" name="image" accept="image/*, png,jpeg,jpg" onChange={handleFileSelected}>
        </input>
        <label htmlFor="upload-img" >
          <Image src={addPlus} width={40} height={40} alt="Add-Plus" />
        </label>

        {/* <button type="submit"> Upload image</button> */}

        <TextNewPage text={infoGame.GAMEIMAGE} />
      </form>



    </div>




  )
}
