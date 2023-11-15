
import TextNewPage from "./TextNewPage"
import { infoGame } from "@/constants/constantNewPage"
import Image from "next/image"
import addPlus from '../../asset/icons/AddPlus.svg'
import { useState, useContext, useEffect} from "react"
import { supabase } from "@/lib/supabase"
import ShowImage from '../elements/ShowImage'
import { v4 as uuidv4 } from 'uuid';
import { UseGlobalContext } from "@/context/AuthContext";
import { CDNURL } from "@/constants/constantNewPage"
import { NewContext } from "@/context/NewContext"

export default function AddImage() {

  const [fileName, setFileName] = useState('')
  const [image, setImage] = useState('')

  const { id } = UseGlobalContext();

  const {file, setFile, setImageUrl} = useContext(NewContext);
  const [preview, setPreview] = useState([]);

  const handleSubmitImage = async (e) => {
    // e.preventDefault();
    setFileName(`${uuidv4()}-${file.name}`);
    // console.log('file',file);
    const { data, error } = await supabase.storage
      .from("test")
      .upload(id + '/' + fileName , file, {
        cacheControl: "3600",
        upsert: false,
      });
      if(data) {console.log(data); 
      console.log('address',CDNURL +'/' + data.path);
      setImageUrl(CDNURL +'/' + data.path)}
  
  }

  useEffect(()=>{
    handleSubmitImage();
   
    
  },[file])

  useEffect(()=>{
    // console.log(fileName,'filename');
    // console.log(CDNURL + '/' + fileName);
  },[fileName])
  
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

       

        <TextNewPage text={infoGame.GAMEIMAGE} />
      </form>
          <img src=  "https://vcclbeslusvmyuhuefmr.supabase.co/storage/v1/object/public/test/e1ab338f-713c-4349-ab54-20b463551aa8/4c4168b5-dbbf-4933-810b-2d9922aaa960-612c6182c8d3d.jpeg?t=2023-11-14T10%3A14%3A16.924Z"
/>
         

    </div>




  )
}
