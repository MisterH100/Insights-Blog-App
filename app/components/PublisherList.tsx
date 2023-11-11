'use client'
import Image from "next/image";
import { useGlobalContext } from "../utils/globalContext";
import profileImage from '@/app/assets/userimage.png'
import Link from "next/link";
import { useFetchPublishers } from "../functions/getData";
import { Loading } from "../components/Loading";



export const PublisherList =()=>{
    const {loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/users';
    const publishers = useFetchPublishers(URL);

    return(
        <div>
            {loading?<Loading/>:
                <>
                    {publishers.map((publisher,index)=>  
                        <Link href={`/blogs?pb=${publisher.name+" "+publisher.surname }`} key={index} className="flex items-center mt-4">
                            <div className="avatar">
                                <div className="rounded-full w-12 h-12">
                                <Image 
                                    src={publisher.profileImage?.image_url?publisher.profileImage.image_url:profileImage} 
                                    alt="profile image"
                                    width={100}
                                    height={100} 
                                />                      
                                </div>
                            </div>
                            <div className="pl-4">
                                <div className="font-bold">{publisher.name} {publisher.surname}</div>
                                <div className="text-sm opacity-50">{publisher.username}</div>
                            </div>
                        </Link>
                    )}
                </>
            }
        </div>
    )
}