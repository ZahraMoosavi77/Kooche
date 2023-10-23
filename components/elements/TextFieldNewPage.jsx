

export default function TextField({ type,value,label,name }) {
  return (
    <>
      <label>{label} </label>
      <input type={type} value={value} name={name} className="bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary" />


    </>


  )
}
