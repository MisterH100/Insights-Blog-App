'use client';
import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import Loading from "./components/Loading";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  },[])

  return (
    <main className="min-h-full bg-base-100">
      {
        !loading?
        <>
          <Blogs/>
        </>:
        <Loading/>
      }
    </main>
  )
}
