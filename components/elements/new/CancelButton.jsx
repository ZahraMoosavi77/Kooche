'use client'
import { useRouter } from "next/navigation";

export default function CancelButton({text}) {
  const router = useRouter();
  return (
    <button   onClick={() => router.back()} className='font-peyda-medium text-gray-800 leading-leading-3 rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-gray-900 '>{text}</button>
  )
}
