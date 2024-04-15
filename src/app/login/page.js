'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page = () => {
  const routr = useRouter()
  return (
    <div>
      <h1>Login page</h1>
      <Link href="/">go to home page</Link>
      <button onClick={()=>routr.push("/")}>home page</button>
      <button onClick={()=>routr.push("/login/loginstudent")}>Go to student login page</button>
      <button onClick={()=>routr.push("/login/loginTeacher")}>Go to teacher login page</button>
    </div>
  )
} 

export default Page
