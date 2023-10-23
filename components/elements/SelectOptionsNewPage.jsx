import down from '../../asset/icons/Down.svg'
import Image from 'next/image'
export default function SelectOptionsNewPage({ label,optionsGroup }) {
    return (
        <>
            <label>{label}</label>
            <div className="flex justify-between items-center appearance-none bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary">
                {/* {optionsGroup.map((item)=><option className=" text-gray-900 rounded-xl font-peyda-regular focus:bg-primary  ">{item}</option>)} */}
                optons
                <Image src={down} width={24} height={24}/>
            </div>
            <div className='absolute  flex items-center justify-center'>
            <Image src={down} width={20} height={20}/>

            </div>
          



        </>

    )
}
