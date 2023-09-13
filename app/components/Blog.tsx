'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "./Error";

interface IBlog{
    _id?: number,
    name: string,
    title: string,
    blog: string
}
const Blog =({BlogPostId}: any)=>{
    const [fail, setFail] = useState(false);
    const [blog, setBlog] = useState<IBlog>({
        _id: 1,
        name:"",
        title: "",
        blog: ""
    });
    const URL =`http://localhost:8000/api/getBlogs/${BlogPostId}`;

    const fetchBlog = async(URL: string)=>{
        try {
            const response = await fetch(URL);
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
                <article className="w-full flex flex-col md:items-center min-h-screen px-2 md:px-10">
                    <div className="w-full flex justify-start md:justify-end gap-2">
                        <ul>
                            <li>
                            {blog.name}
                            </li>
                            <li>
                                Posted on :00/00/00
                            </li>
                            <li className="text-sm">
                                Powered by @insights
                            </li>
                        </ul>
                    </div>

                    <div className="py-6 prose max-w-[100ch]">
                        <h1>{blog.title}</h1>
                        <div className="font-semibold">
                            {blog.blog}
                        </div>
                    </div>
                    <Link href={'/'}>
                        <button className="btn btn-outline bg-base-300">Back to blogs</button>
                    </Link>

                </article>: <Error message="Failed to fetch blog post"/>
            
            }
    </section>
    )
}

export default Blog;


