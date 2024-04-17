"use client"

import { useEffect, useState } from 'react'

const Page = () => {
    const [product,setProduct] = useState([]);
   
    useEffect(() => {
        (async () => {
          try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            console.log(data);
            setProduct(data.products);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        })();
      }, []);
  return (
    <div>
    <h1>Product lists</h1>
      {
        product.map((item)=>(
            
            <h3 key={item.id}>Name={item.title},    price={item.price}</h3>
        ))

      }
    </div>
  )
}

export default Page
