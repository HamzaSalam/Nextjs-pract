'use client'
import Link from 'next/link'
import React from 'react'
import  './login.css'
import { usePathname } from 'next/navigation'


const Layout = ({children}) => {
  const path = usePathname()
  console.log(path.charAt(8))
  return (
    <div className='main'>
     {
      path !== "/login/loginTeacher" ?
      <ul className='login_menu'>
      <li><h4>Logo Here</h4></li>
        <li><Link href="/login">Login Main </Link></li>
        <li><Link href="/login/loginstudent">Student Login</Link></li>
        <li><Link href="/login/loginTeacher">Teacher Login</Link></li>
      </ul>
      : null
     }
      {children}
    </div>
  )
}

export default Layout
