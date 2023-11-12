import Link from "next/link";
import Blogs from "./components/Blogs";
import { Publishers } from "./components/Publishers";

export default function Home() {
  return (
    <main className="min-h-full bg-base-100">
      <div className="w-full md:px-20 pt-4">
        <Link href={"/publishers"} className="link">
          Blog publishers
        </Link>
        <Publishers/>
      </div>
      <span className="divider"></span>
      <Blogs filter=""/>
    </main>
  )
}
