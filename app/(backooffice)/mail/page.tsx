import React from 'react'
import { accounts, mails } from './data'
import { Mail } from './components/mail'
import { cookies } from 'next/headers'

export default function page() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined
  
  return ( 
    <Mail
    accounts={accounts}
    mails={mails}
    defaultLayout={defaultLayout}
    defaultCollapsed={defaultCollapsed}
    navCollapsedSize={4}
  />
  )
}
