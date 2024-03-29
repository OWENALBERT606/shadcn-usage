import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function NavBar() {
  return (
    <div className='flex py-4 px-8 max-w-6xl mx-auto border-b border-gray-700 mb-8 justify-between'>
        <Link href="#">Logo</Link>
        <ModeToggle/>
    </div>
  )
}
