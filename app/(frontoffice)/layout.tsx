import NavBar from '@/components/NavBar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <NavBar/>
        <div className="py-8 px-8">
        {children}
          </div>
        </div>
  )
}
