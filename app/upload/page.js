"use client";
import { v4 as  uuidv4 } from "uuid";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import Image from "next/image";

export default function upload() {
  const [file, setFile] = useState([]);
  const [im, setImg] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = `${file.name}`;
    // ${uuidv4()}-
    

    const { data, error } = await supabase.storage
      .from("unity-image")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    const filePath = data.path;
        console.log(filePath);


    const { data: data2 } = await supabase.storage
      .from("unity-image")
      .getPublicUrl(`${filePath}`);

     setImg(data2)
      
  };

const handleFileSelected = (e) => {
  setFile(e.target.files[0]);
};

// const read = async () => {
//   const { data } = await supabase.storage
//     .from("unity-image")
//     .getPublicUrl(`${filePath}`);
// };
// let x = read();
// console.log(x);

return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileSelected} />
      <button type="submit"> Upload image</button>
    </form>
    <Image src={im}/>
  </>
);
}
