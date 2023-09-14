"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "./Error";


interface IBlogs{ 
    _id?: number
    name: string;
    title: string;
    blog: string;
    createdAt: Date;
}

const Blogs = ()=>{
    const [isLoaded, setIsLoaded] = useState(true);
    const [blogs, setBlogs] = useState<IBlogs[]>([{
        _id: 1,
        name: "",
        title: "",
        blog: "",
        createdAt: new Date(),
    }])

    const URL = 'http://localhost:8000/api/getBlogs';
    const fetchData = async (URL:string) => {
        try {
            const response = await fetch(URL);
            const data = response.json();
            setBlogs(await data);
        } catch (error) {
            setIsLoaded(false)
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData(URL);
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
                                <p className="text-xs">{blog.createdAt.toLocaleString().slice(-24, -14)}</p>
                            </div>
                        </div>
                        <p className="h-36 overflow-hidden text-ellipsis text-base">{blog.blog}
                        </p>
                        <div className="card-actions justify-center">
                        <Link href={`/blogs/${blog._id}`}>
                            <button className="btn btn-outline bg-base-300">View Blog</button>
                        </Link>
                        </div>
                    </div>

                </div>):
                <Error message="Failed to fetch blog posts"/>
            }

            
        </section>
    )
}

export default Blogs;