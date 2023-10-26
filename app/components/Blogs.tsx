"use client";
import Link from "next/link";
import insightsLogo from "../assets/insightslogo.svg";
import Image from "next/image";
import { Loading } from "./Loading";
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import { ErrorMessage } from "./Error";


const Blogs = ()=>{
    const {loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs,error} = useFetchBlogs(URL);

    return(
        <div className="w-full min-h-screen md:px-20 bg-base-100 text-base-content">
            <h1 className="font-bold text-3xl p-4">All blog Posts:</h1>
            {loading?<Loading/>:
                error?<ErrorMessage message="opps an error has occured"/>:
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 ">
                    {blogs.map((blog,index) =>
                        <div key={index} className="card card-compact min-w-96 shadow-sm shadow-gray-800  text-white z-0">
                            <div className="bg-white rounded-tr-md rounded-tl-md h-20 flex justify-center items-center">
                                <Image
                                    src={insightsLogo}
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
        </div>
    )
}

export default Blogs;