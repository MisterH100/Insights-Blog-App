'use client'
import Image from "next/image";
import profileImage from '@/app/assets/userimage.png'
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import { Loading } from "./Loading";
import Link from "next/link";
import { motion } from "framer-motion";



export const Profile =()=>{
    const {user,logOut,loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs} = useFetchBlogs(URL);
    const owner = user?.email
    const ownedBlogs = blogs.filter(blog => blog.publisher == owner);
    return(
        <div>
            {loading?<Loading/>:
            <>
                <div className="relative w-full h-52 bg-white">
                    <div className="w-full absolute left-0 -bottom-20 flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-40 h-40 rounded-full">
                                <Image 
                                    src={user.profileImage.image_url?user.profileImage.image_url:profileImage.src} 
                                    alt="profile image"
                                    width={100}
                                    height={100} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-20 text-center">
                    <h1 className="font-bold text-3xl text-white">{user.username}</h1>
                    <h2 className="font-bold text-md text-white opacity-50">{user.email}</h2>
                </div>

                <div className="stats shadow w-full">
                    <div className="stat place-items-center">
                        <div className="stat-title">Blogs</div>
                        <div className="stat-desc">{ownedBlogs.length}</div>
                    </div>
            
                    <div className="stat place-items-center">
                        <div className="stat-title">Joined</div>
                        <div className="stat-desc">{new Date(user.createdAt).toLocaleDateString()}</div>
                    </div>
                </div>
                <h3 className="w-full text-center p-4">Published blogs</h3>
                <div className="w-full md:justify-center gap-2 carousel rounded-box">
                    {ownedBlogs.map((blog,index)=> 
                        <Link 
                            href={`blogs/${blog._id}`} 
                            key={index} 
                            className="relative carousel-item w-60 h-72 bg-secondary">
                            <motion.div
                                initial={{opacity: 0,y:10}}
                                whileInView={{opacity: 1, y:0}}
                                transition={{type: "tween", duration:1}}
                                viewport={{once: true}}
                                className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>
                            </motion.div>
                            <div 
                                className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-100 hover:bg-opacity-50 flex justify-center items-center transition-all duration-200 ease-in-out">
                                <p>Read Blog</p>
                            </div>
                        </Link>
                    )}
                </div> 
                <div className="mt-20 w-fit mx-auto">
                    <button
                        onClick={logOut}
                        className="btn btn-warning"
                        >logout
                    </button>
                </div>
            </>
            }
        </div>
    )
}