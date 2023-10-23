import TextNewPage from "./TextNewPage"
import { infoGame } from "@/constants/constantNewPage"
import Image from "next/image"
import addPlus from '../../asset/icons/AddPlus.svg'
export default function AddImage() {
  return (
   
          <div className=' flex flex-col justify-center items-center border-1 border-primary-100 rounded-xl border-solid w-28 h-28'>
           <Image src={addPlus} width={40} height={40} alt="Add-Plus"/>
          <TextNewPage text={infoGame.GAMEIMAGE}/></div>

          
  
  
  )
}
