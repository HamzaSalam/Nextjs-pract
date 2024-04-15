'use client'
import { useRouter } from 'next/navigation'

const Page = () => {
    const rr = useRouter()
    return (
      <div>
        <h1>Teacher login page</h1>
        <button onClick={()=>rr.push("/login")}> go to login page</button>
      </div>
    )
  }
  
  export default Page
  