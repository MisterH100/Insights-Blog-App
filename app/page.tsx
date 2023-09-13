'use client';
import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import Loading from "./components/Loading";
import User from "./components/User";


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
          <User/>
          <Blogs/>
        </>:
        <Loading/>
      }
    </main>
  )
}
