import Image from "next/image"

export default function ShowImage( image) {
  return (
    <div className='border-1 border-primary-100 rounded-xl border-solid w-28 h-28'> 
    <Image src={image} width={50} height={50} alt="image"/>
    </div>
  )
}
