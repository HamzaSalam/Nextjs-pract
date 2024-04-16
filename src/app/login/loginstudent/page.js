'use client'

import { useRouter } from 'next/navigation'

const Page = () => {
  const routr = useRouter()
  return (
    <div>
      <h1 className='heading'>student Login page</h1>
    
      {/* <button onClick={()=>routr.push("/login")}>home page</button> */}
     
    </div>
  )
} 

export default Page
