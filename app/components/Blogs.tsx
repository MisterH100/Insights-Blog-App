"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";


interface IBlogs{ 
    _id?: number
    name: string;
    title: string;
    blog: string;
    
}
const Blogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(false);
    const [blogs, setBlogs] = useState<IBlogs[]>([{
        _id: 1,
        name: "",
        title: "",
        blog: ""
    }])

    const URL = 'http://localhost:8000/api/getBlogs';
    const fetchData = async (URL:string) => {
        try {
            const response = await fetch(URL);
            const data = response.json();
            setBlogs(await data);
        } catch (error) {
            console.log(error);
            setFail(true)
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
        fetchData(URL);
    },[]);

    return(
        <section className="w-full flex flex-wrap justify-center gap-3 p-10 bg-base-100 text-base-content">
            {loading? <Loading/>:
                <>
                    {!fail? blogs.map(blog => <div key={blog._id}className="card w-96 bg-base-200 shadow-2xl">
                        <div className="card-body">
                            <div className="w-full flex justify-between items-center">
                                <h2 className="card-title truncate">{blog.title}</h2>
                                <Link href={'/'}className="text-sm text-center truncate">{blog.name}</Link>
                            </div>
                            <p className="h-36 overflow-hidden text-ellipsis text-base">{blog.blog}
                            </p>
                            <div className="card-actions justify-center">
                            <Link href={`/blogs/${blog._id}`}>
                                <button className="btn btn-outline bg-base-300">View Blog</button>
                            </Link>
                            </div>
                        </div>

                    </div>): <Error message="Failed to fetch blog posts"/>}

                </>
            }
            
        </section>
    )
}

export default Blogs;