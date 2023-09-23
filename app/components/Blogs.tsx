"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "./Error";
import { IBlog } from "../interfaces/BlogInterface";
import { getDate } from "../functions/getDate";
import { fetchData } from "../functions/getData";
import { formatNumber } from "../functions/getFormattedNumber";
import { likePost } from "../functions/likeBlog";
import ReactMarkdown from "react-markdown";


const Blogs = ()=>{
    const [isLoaded, setIsLoaded] = useState(true);
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    useEffect(()=>{
        fetchData(URL, setBlogs,setIsLoaded);
    },[]);

    return(
        <section className="w-full flex flex-wrap justify-center gap-3 p-10 bg-base-100 text-base-content">
            {isLoaded? blogs.map(blog => 
                <div key={blog._id}className="card w-96 bg-base-200 shadow-2xl">
                    <div className="card-body">
                        <div className="w-full flex justify-between">
                            <h2 className="card-title truncate">{blog.title}</h2>
                            <div>
                                <Link href={'/'}className="text-sm text-center truncate">{blog.name}</Link>
                                <p className="text-xs">{getDate(blog.createdAt)}</p>
                            </div>
                        </div>
                        <div className="h-36 overflow-hidden text-ellipsis text-base shadow-inner">
                            <ReactMarkdown>
                                {blog.blog}
                            </ReactMarkdown>
                        </div>
                        <div className="card-actions justify-between">
                            <Link href={`/blogs/${blog._id}`}>
                                <button className="btn btn-outline bg-base-100">View Blog</button>
                            </Link>
                            {/*<button
                                value={'Like'}
                                onClick={likePost(blog._id)}
                                className="btn btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor'><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                {formatNumber(blog.likes)}
                            </button>*/}
                        </div>
                    </div>

                </div>):
                <Error message="Failed to fetch blog posts"/>
            }

            
        </section>
    )
}

export default Blogs;