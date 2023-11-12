'use client'
import Image from "next/image";
import Link from "next/link";
import profileImage from '@/app/assets/userimage.png';
import { useFetchPublishers } from "../functions/getData";


export const Publishers =()=>{
    const URL = 'https://misterh-api-server.onrender.com/api/users';
    const publishers = useFetchPublishers(URL)
    return(
        <div className="avatar-group -space-x-6 py-4">
            {publishers?
                <>
                {publishers.map((publisher,index)=>
                <Link href="/publishers" key={index} className="avatar border-white">
                    <div className="w-24 rounded-xl">
                    <Image 
                        src={publisher.profileImage?.image_url?publisher.profileImage.image_url:profileImage} 
                        alt="profile image"
                        width={100}
                        height={100} 
                    />                      
                    </div>
                </Link>
                )
                }</>: null
            }
          <div className="avatar placeholder border-none w-12 h-12">
            <div className="w-12 bg-neutral-focus text-neutral-content">
              <span>+{publishers.length}</span>
            </div>
          </div>
        </div>
    )
}