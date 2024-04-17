import React from 'react'

export default function TextHelper({text,className}) {
  return (
    <div  className={`text-scales-caption font-peyda-regular leading-leading-3 text-gray-900 ${className}  ` }>{text}</div>
  )
}
