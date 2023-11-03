// "use client";
// // import { v4 as uuidv4 } from "uuid";
// import { supabase } from "../../lib/supabase";
// import { useState } from "react";
// import Image from "next/image";
// // https://olpicjxizbfbwpdftqvt.supabase.co/storage/v1/object/public/unity-image/test/First%20Page%20opened%20hamburger.png?t=2023-10-02T16%3A19%3A44.806Z

// const CDNURL =
//   "https://olpicjxizbfbwpdftqvt.supabase.co/storage/v1/object/public/unity-image/test";
// export default function Upload() {
//   const [file, setFile] = useState([]);
//   const [im, setImages] = useState([]);

//   async function getImages() {
//     const { data, error } = await supabase.storage
//       .from("test")
//       .list("test", {
//         limit: 100,
//         offset: 0,
//         sortBy: { column: "name", order: "asc" },
//       }); // Cooper/

//     console.log(data);
//     if (data !== null) {
//       setImages(data);
//     } else {
//       alert("Error loading images");
//       console.log(error);
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("okkk");
//     // const fileName = `${uuidv4()}-${file.name}`;
//     const fileName = file.name;
//     // console.log(fileName);
//     // console.log(file);

//     const { data, error } = await supabase.storage
//       .from("test")
//       .upload(fileName, file, {
//         cacheControl: "3600",
//         upsert: false,
//       });
    
//     if (data) {
//       getImages();
//       console.log(data);
//       console.log('data');
//     } else {
//       console.log(error);
//     }
//   };

//   const handleFileSelected = (e) => {
//     setFile(e.target.files[0]);
//     // download();
   
//   };
   
//   const download = async()=>{
//     const { data, error } = await supabase
//   .storage
//   .from('test')
//   .download('0e321aee-a72b-463a-843a-806eb6a9b792-market-stall.svg')
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="file" name="image" onChange={handleFileSelected} />
//         <button type="submit"> Upload image</button>
//       </form>
//       {im.map((item) => {
//         console.log(CDNURL + "/" + item.name);
//         console.log("ommad");

//         return (
//           <Image
//             src={`${CDNURL}/${item.name}`}
//             width={100}
//             height={100}
//             alt="ma"
//           />
//         );
//       })}

//       {/* <img src="https://olpicjxizbfbwpdftqvt.supabase.co/storage/v1/object/public/unity-image/test/3082d578-2e98-490c-9393-b6e38e0d1b3c-search-dark.svg?t=2023-10-02T16%3A47%3A49.499Z" />
//       <Image
//         src="https://olpicjxizbfbwpdftqvt.supabase.co/storage/v1/object/public/unity-image/test/3082d578-2e98-490c-9393-b6e38e0d1b3c-search-dark.svg"
//         alt="p"
//         width={40}
//         height={40}
//       /> */}
//     </>
//   );
// }
import React from 'react'

export default function Page() {
  return (
    <div>page</div>
  )
}
