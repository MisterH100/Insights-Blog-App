import Blogs from "./components/Blogs";
import User from "./components/User";


export default function Home({color}: any) {
  return (
    <main className="min-h-full bg-base-100">
      <User/>
      <Blogs/>
    </main>
  )
}
