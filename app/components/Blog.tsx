'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import Error from "./Error";
import { IBlog } from "../interfaces/BlogInterface";
import { getDate } from "../functions/getDate";
import Image from 'next/image'
import profileImage from "../assets/handsomeSelfie.png";



const Blog =({BlogPostId}: any)=>{
    const [fail, setFail] = useState(false);
    const [blog, setBlog] = useState<IBlog>({
        _id: 1,
        name:"",
        title: "",
        blog: "",
        likes: 0,
        createdAt: new Date()
    });
    
    const URL =`https://misterh-api-server.onrender.com/api/blogs/blog/${BlogPostId}`;

    const fetchBlog = async(srting: string)=>{
        try {
            const response = await fetch(srting);
            const data = response.json();
            setBlog(await data);
        } catch (error) {
            console.log(error);
            setFail(true);
        }
    }

    useEffect(()=>{
        fetchBlog(URL);
    },[])

    return(
        <section className="w-full p-10 bg-base-100 text-base-content">
            {!fail?
                <article className="w-full min-w-full flex flex-col md:items-center min-h-screen px-2 md:px-60">
                    <div className="w-full flex justify-start items-center gap-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <Image 
                                    src={profileImage.src} 
                                    alt="profile image"
                                    width={100}
                                    height={100} 
                                />
                            </div>
                        </div>

                        <ul className="min-w-full text-sm md:text-base">
                            <li>
                                {blog.name}
                            </li>
                            <li>
                                Posted on: {getDate(blog.createdAt)}
                            </li>
                            <li className="text-sm">
                                Powered by @insights
                            </li>
                        </ul>
                    </div>

                    <div className="py-6 prose min-w-full">
                        <h1 className="underline min-w-max">{blog.title}</h1>
                        <div className="font-semibold">
                            <ReactMarkdown> 
                                {blog.blog}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="w-full flex justify-start md:justify-center pt-20 min-w-max">
                        <Link href={'/'} className="btn btn-outline bg-base-300">
                            Back to blogs
                        </Link>
                    </div>

                </article>: <Error message="Failed to fetch blog post"/>
            
            }
    </section>
    )
}

export default Blog;


