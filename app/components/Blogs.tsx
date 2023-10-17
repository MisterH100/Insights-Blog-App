"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "./Error";
import { IBlog } from "../interfaces/BlogInterface";
import { fetchData } from "../functions/getData";
import {Loading, WelcomeBlogLoading} from "./Loading";


const Blogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const [welcomeBlog, setWelcomeBlog] = useState<IBlog>({
        _id: 1,
        name:"Handsome Nyathi",
        title: "Hi Welcome to Insights",
        description: "Lets make INSIGHTS Great, Click View Blog to find out how you can contribute your Interests to this blog",
        blog: "",
        likes: 0,
        createdAt: new Date()
    })

    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const WELCOME_BLOG_ID = '6510a511aa9661bb7c4db09c';
    const WELCOME_BLOG_URL = `https://misterh-api-server.onrender.com/api/blogs/blog/${WELCOME_BLOG_ID}`;
    useEffect(()=>{
        fetchData(URL, setBlogs,setFailed,setLoading);
        fetchData(WELCOME_BLOG_URL,setWelcomeBlog,setFailed,setLoading)
    },[URL,WELCOME_BLOG_URL]);

    return(
        <section className="w-full min-h-screen py-10 bg-base-100 text-base-content">
            {loading?<WelcomeBlogLoading/>:
            <div className="w-full md:max-w-[65ch] md:mx-auto hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">Eurika! a light bulb moment</h1>
                        <p className="py-6">Prepare for moments of pure enlightment🌟 and lets ignite your curiosity and spark your 'Eurika!'' moments. Dive into a world of facscinating insights and discoveries click the link below to contact and find out more.</p>
                        <Link href={'https://misterhportfolio.vercel.app/collab'} target="_blank" className="btn btn-primary">I am in</Link>
                    </div>
                </div>
            </div>
            }
            {loading?null:<h1 className="w-full text-4xl font-bold py-8 text-center">All Blog Posts</h1>}

            <article className="relative w-full md:w-[90%] md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {loading? <Loading/>: blogs.length ==1?
                    <h1>It appears there are no blog posts published at the moment</h1>
                :null}

                {loading?null:failed?null:<div className="relative w-full card md:min-w-96 bg-blue-300 shadow-2xl overflow-hidden">
                    <div className="z-10 card-body">
                        <span className="absolute top-1">Pinned</span>
                        <div className="w-full h-20 overflow-hidden">
                            <h2 className="w-full card-title">{welcomeBlog.title}</h2>
                        </div>

                        <div className="h-36 overflow-hidden text-ellipsis text-base">
                            {!welcomeBlog.description? `Add a description to your blog to make it more discoverable when people search for keywords. ${welcomeBlog.title}`: welcomeBlog.description}
                        </div>
                        <div className="card-actions justify-between">
                            <Link href={`/blogs/${welcomeBlog._id}`}>
                                <button className="btn btn-secondary bg-white">Read Blog</button>
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
                </div>}
                {failed? <Error message="Failed to fetch blog posts"/>:
                    blogs.map(blog => 
                    <div key={blog._id}className="relative w-full card md:min-w-96 bg-base-200 shadow-2xl overflow-hidden">
                        <div className="z-10 card-body">
                            <div className="w-full h-20 overflow-hidden">
                                <h2 className="w-full card-title">{blog.title}</h2>
                            </div>

                            <div className="h-36 overflow-hidden text-ellipsis text-base">
                                {!blog.description? `Add a description to your blog to make it more discoverable when people search for keywords. ${blog.title}`: blog.description}
                            </div>
                            <div className="card-actions justify-between">
                                <Link href={`/blogs/${blog._id}`}>
                                    <button className="btn btn-secondary">Read Blog</button>
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

                    </div>)
                    
                }
            </article>

            
        </section>
    )
}

export default Blogs;