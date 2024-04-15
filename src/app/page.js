'use client'
import { useState } from "react";
import Link from 'next/link';

import { useRouter } from "next/navigation";

export default function Home() {
  const [name , setname] = useState()
  const apple = (item)=>{
    setname(item)
  }
  const routr = useRouter();
  return (
    <main >
     
      <h1>Hi {name}</h1>
      <Link href="/login">Go to login </Link>
      <Link href="/about">Go to about </Link>
      {/* <button onClick={()=>apple("hamza")}>click me</button> */}
      <button onClick={()=>routr.push("/login")}>go to login page</button>
    </main>
  );
}


