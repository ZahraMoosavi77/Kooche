import React from 'react'

export default function TextHelper({text,specialClass}) {
  return (
    <div  className={`text-scales-caption font-peyda-regular leading-leading-3 text-gray-900 ${specialClass} ` }>{text}</div>
  )
}
