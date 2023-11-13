"use client";
import Link from "next/link";
import defaultImage from "@/app/assets/defaultImage.jpg";
import Image from "next/image";
import { Loading } from "./Loading";
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import { ErrorMessage, NoResults } from "./Error";
import {motion} from "framer-motion";


const Blogs = ({filter}:{filter:any})=>{
    const {loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs,error} = useFetchBlogs(URL);
    const filteredBlogs = blogs.filter((blog) =>blog.name?.includes(filter));

    return(
        <div className="w-full min-h-screen md:px-20 bg-base-100 text-base-content">
            <h1 className="font-bold text-3xl p-4">All blog Posts:</h1>
            {filter?<span className="font-bold p-4">{filter}'s blog posts</span>: null}
            {loading?<Loading/>:
                error?<ErrorMessage message="opps an error has occured, check your internet connection"/>:
                <> 
                    {filter == null?<NoResults/>:
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 mt-4">
                            {filteredBlogs.map((blog,index) =>
                                <motion.div
                                    initial={{opacity: 0,y:10}}
                                    whileInView={{opacity: 1, y:0}}
                                    transition={{type: "tween", duration:1}}
                                    viewport={{once: true}}
                                    key={index} 
                                    className="card card-compact min-w-96 shadow-sm shadow-gray-800  text-white z-0">
                                    <div className="bg-white rounded-tr-md rounded-tl-md h-40 flex justify-center items-center overflow-hidden">
                                        <Image
                                            className="w-full h-full object-contain hover:scale-125 transition-all duration-700 ease-in-out"
                                            src={blog.blogImage?blog.blogImage:defaultImage}
                                            alt="Insghts Logo"
                                        /> 
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.title}</h2>
                                        <p>{blog.description}</p>
                                        <div className="card-actions justify-center">
                                            <Link href={`/blogs/${blog._id}`} className="btn bg-white text-black w-full hover:text-white capitalize">Read Now
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Blogs;