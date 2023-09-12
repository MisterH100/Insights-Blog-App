import Blogs from "./components/Blogs";
import User from "./components/User";


export default function Home() {
  return (
    <main className="min-h-screen">
      <User/>
      <Blogs/>
    </main>
  )
}
