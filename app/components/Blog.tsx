'use client';
import { getDate } from "../functions/getDate";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import profileImage from "../assets/handsomeSelfie.png";
import defaultImage from "@/app/assets/defaultImage.jpg";
import { useFetchBlog } from "../functions/getData";
import { useGlobalContext } from "../utils/globalContext";
import { Loading } from "./Loading";
import { ErrorMessage } from "./Error";




const Blog =({BlogPostId}: any)=>{
    const URL =`https://misterh-api-server.onrender.com/api/blogs/blog/${BlogPostId}`;
    const {loading} = useGlobalContext();
    const {blog,error}= useFetchBlog(URL);

    return(
        <section className="relative w-full p-10 bg-base-100 text-base-content">
            {loading? <Loading/>:
                error?<ErrorMessage message="failed to load blog post"/>:
                <article className="w-full min-w-full flex flex-col md:items-center min-h-screen px-2 md:px-20">
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

                        <ul className="min-w-max text-sm md:text-base">
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
                        <h1 className="underline">{blog.title}</h1>
                        <div className="w-full h-80">
                            <Image
                                className="w-full h-full object-none"
                                src={blog.blogImage?blog.blogImage:defaultImage}
                                alt="Blog Cover Image"
                            />
                        </div>
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

                </article>
            }
            
    </section>
    )
}

export default Blog;


