"use client"

import { supabase } from "@/index";
import { useState } from "react"

export default function upload() {

    const [file,setFile] = useState([])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const fileName = `${uuidv4()}-${file.name}`

        const {data, error} = await supabase.storage
        .from("unity-image")
        .upload(fileName, file, {
            cacheControl : "3600",
            upsert : false ,

        });

        const filePath = data.path
    }

    const handleFileSelected = (e) =>{
            setFile(e.target.files[0])
    }

  return (
   <form onSubmit={handleSubmit}>

    <input type="file" name="image" onChange={handleFileSelected}/>
    <button type="submit"> Upload image</button>



   </form>
  )
}
