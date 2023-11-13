"use client"
import { IBlog } from "../interfaces/BlogInterface"
import Link from "next/link"
import defaultImage from "@/app/assets/defaultImage.jpg";
import Image from "next/image";
import { NoResults } from "./Error";
import { useGlobalContext } from "../utils/globalContext";
import { Loading } from "./Loading";
import { motion } from "framer-motion";


const SearchResults =({blogs}:{blogs:IBlog[]})=>{
    const {loading} = useGlobalContext();

    return(
        <section className="relative w-full gap-3 p-10 bg-base-100 text-base-content">
            <h1 className="font-bold text-3xl p-4">Results:</h1>
            {loading?<Loading/>:blogs.length < 1?<NoResults/>:
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 ">
                    {blogs.map((blog,index) =>
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
        </section>
    )
}

export default SearchResults;