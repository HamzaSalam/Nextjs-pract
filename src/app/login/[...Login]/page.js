"use client"

const Page = ({params}) => {
    console.log(params)
  return (
    <div>
      <h1>{params.Login[0]}</h1>
      <h1>day</h1>
    </div>
  )
}

export default Page
