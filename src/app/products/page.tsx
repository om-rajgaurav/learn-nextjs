"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Products() {
  const router  = useRouter()
  const handleOnclick = (item:any) => {
    console.log("clicked")
    router.push(`/products/${item}`)
  }

  return (
    <div>
      <h1>Products</h1>
      {
        [1,2,3,4,5].map((item,index)=>{
          return (
            <div key={index}>
              
                 <button onClick={()=>handleOnclick(item)}>
                    <h1>gotoDetails {item}</h1>
                 </button>
              
            </div>
          )
        })
      }
    </div>
  );
}
