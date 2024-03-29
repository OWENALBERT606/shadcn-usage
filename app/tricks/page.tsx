import BoldHeading from '@/components/BoldHeading'
import React from 'react'

export default function page() {
  return (
    <div className=''>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        shadcn concepts
      </h1>
      <blockquote className="mt-6 text-red-500 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </blockquote>
      <BoldHeading heading="True Developers"/>
    </div>
  )
}
