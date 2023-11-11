"use client";
import Link from "next/link";
import defaultImage from "@/app/assets/defaultImage.jpg";
import Image from "next/image";
import { Loading } from "./Loading";
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import { ErrorMessage, NoResults } from "./Error";


const Blogs = ({filter}:{filter:any})=>{
    const {loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs,error} = useFetchBlogs(URL);
    const filteredBlogs = blogs.filter((blog) =>blog.name?.includes(filter));

    return(
        <div className="w-full min-h-screen md:px-20 bg-base-100 text-base-content">
            <h1 className="font-bold text-3xl p-4">All blog Posts:</h1>
            {loading?<Loading/>:
                error?<ErrorMessage message="opps an error has occured"/>:
                <> 
                    {filteredBlogs.length < 1?<NoResults/>:
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 ">
                            { filteredBlogs.map((blog,index) =>
                                <div key={index} className="card card-compact min-w-96 shadow-sm shadow-gray-800  text-white z-0">
                                    <div className="bg-white rounded-tr-md rounded-tl-md h-40 flex justify-center items-center">
                                        <Image
                                            className="w-full h-full object-contain"
                                            src={blog.blogImage?blog.blogImage:defaultImage}
                                            alt="Insghts Logo"
                                        /> 
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.title}</h2>
                                        <p>{blog.description}</p>
                                        <div className="card-actions justify-end">
                                        <Link href={`/blogs/${blog._id}`} className="link">Read Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Blogs;