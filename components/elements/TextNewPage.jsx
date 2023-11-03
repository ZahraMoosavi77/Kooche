import React from 'react'

export default function TextNewPage({text,specialClass}) {
  return (
    <div  className={`text-scales-default font-peyda-regular leading-leading-3 text-gray-900 ${specialClass} ` }>{text}</div>
  )
}
