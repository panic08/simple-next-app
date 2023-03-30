import Link from "next/link";
import React from "react";
import Header from "@/components/Header";


export default function Home() {
  return (
   <div>
       <Header>
     <h1>Hello, world!</h1>
       <Link href="">
           Главная
       </Link>
       <Link href="/users">
           Вторая
       </Link>
       </Header>
   </div>
  )
}
