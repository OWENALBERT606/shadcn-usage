import React from 'react'

export default function BoldHeading({heading}:{heading:string}) {
  return (
    <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     {heading}
    </h2>
    </div>
  )
}
