'use client'
import Image from "next/image";
import Link from "next/link";
import profileImage from '@/app/assets/userimage.png';
import { useFetchPublishers } from "../functions/getData";
import {motion} from "framer-motion";

export const Publishers =()=>{
    const URL = 'https://misterh-api-server.onrender.com/api/users';
    const publishers = useFetchPublishers(URL);
    return(
      <div className="carousel w-full py-4 px-2">
        {publishers != null?
          <>
            {publishers.map((publisher,index)=>
              <Link href={`blogs?pb=${publisher.name+ " "+ publisher.surname}`} key={index} className="avatar mr-4">
                <motion.div
                  initial={{opacity: 0,y:10}}
                  whileInView={{opacity: 1, y:0}}
                  transition={{type: "tween", duration:1}}
                  viewport={{once: true}}
                  className="w-20 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                  <Image 
                    src={publisher.profileImage?.image_url?publisher.profileImage.image_url:profileImage} 
                    alt="profile image"
                    width={100}
                    height={100} 
                  />                      
                </motion.div>
              </Link>
            )
            }
          </>: null
        }
        <Link href="/publishers" className="avatar placeholder pt-4 -ml-4">
          <div className="w-10 h-10 bg-neutral text-neutral-content rounded-full ring ring-black hover:scale-125 transition-all duration-500 ease-in-out">
            <span>{">"}</span>
          </div>
        </Link>
      </div>
    )
}