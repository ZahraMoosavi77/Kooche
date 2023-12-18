'use client'
export default function RegisterAdButton({ text , handleClick }) {
  return (
      <button onClick={handleClick}  className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
  )
}
