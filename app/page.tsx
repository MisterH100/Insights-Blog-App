'use client'
import Image from "next/image";
import Link from "next/link";
import Blogs from "./components/Blogs";
import { useFetchPublishers } from "./functions/getData";
import profileImage from '@/app/assets/userimage.png';

export default function Home() {
  const URL = 'https://misterh-api-server.onrender.com/api/users';
  const publishers = useFetchPublishers(URL)
  return (
    <main className="min-h-full bg-base-100">
      <div className="w-full md:px-20 pt-4">
        <Link href={"/publishers"} className="link">
          Blog publishers
        </Link>
        <div className="avatar-group -space-x-6 py-4">
          {publishers.map((publisher,index)=>
            <Link href="/publishers" key={index} className="avatar border-white">
              <div className="w-24 rounded-xl">
                <Image 
                  src={publisher.profileImage?.image_url?publisher.profileImage.image_url:profileImage.src} 
                  alt="profile image"
                  width={100}
                  height={100} 
                />                      
              </div>
            </Link>
          )
          }
          <div className="avatar placeholder border-none w-12 h-12">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span>+{publishers.length}</span>
            </div>
          </div>
        </div>
      </div>
      <span className="divider"></span>
      <Blogs/>
    </main>
  )
}
