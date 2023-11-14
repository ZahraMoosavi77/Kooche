
import TextNewPage from "./TextNewPage"
import { infoGame } from "@/constants/constantNewPage"
import Image from "next/image"
import addPlus from '../../asset/icons/AddPlus.svg'
import { useState, useContext} from "react"
import { supabase } from "@/lib/supabase"
import ShowImage from '../elements/ShowImage'

import { NewContext } from "@/context/NewContext"

export default function AddImage() {

  
  const {file, setFile} = useContext(NewContext);
  const [preview, setPreview] = useState([]);


  
  const handleFileSelected = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]))
    
    e.target.value = "";
   
    

  };
  return (

    <div className="flex justify-start gap-3">
      {preview.length ? 
        <Image  className='border-1 border-primary-100 rounded-xl border-solid w-28 h-28' src={preview} width={110} height={110} alt="image" />
      : ''}
      <form  className=' flex flex-col justify-center items-center border border-primary-100 rounded-xl border-solid w-28 h-28'>
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
