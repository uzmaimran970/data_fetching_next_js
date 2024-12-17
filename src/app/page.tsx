"use client"

import Link from "next/link"
const page = () => {
  return (
    <div>
      
      <h1>fatching data from client side </h1>
       <Link href="productlist"> go to product list</Link>
       <br></br>

       <Link href="serverside"> go to server side data fatching</Link>

    </div>
  )
}

export default page