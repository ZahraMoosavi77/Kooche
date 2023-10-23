

export default function TextField({ type,value,label,name }) {
  return (
    <>
      <label>{label} </label>
      <input type={type} value={value} name={name} className="bg-gray-200 rounded-xl px-3 py-[9.5px] w-full mt-1" />


    </>


  )
}
