"use client"
import { useSearchParams } from 'next/navigation'
import {useEffect, useState } from "react"
import { IBlog } from "../interfaces/BlogInterface"
import { fetchData } from "../functions/getData"
import Link from "next/link"
import Error from "./Error";
import {Loading} from "./Loading"


const SearchResults =()=>{
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const SEARCH_URL = `https://misterh-api-server.onrender.com/api/blogs/search/${query}`
    useEffect(()=>{
        fetchData(SEARCH_URL,setBlogs,setFailed,setLoading)
    },[SEARCH_URL])

    return(
        <section className="w-full flex flex-wrap justify-center gap-3 p-10 bg-base-100 text-base-content">
            {loading? <Loading/> : blogs.length == 0? <h1>Results for <span className="underline">{query}</span> not found</h1>: null}
            {failed? <Error message="Failed to fetch blog posts"/>:
            blogs.map(blog => 
                <div key={blog._id}className="w-full card md:w-96 bg-base-200 shadow-2xl">
                    <div className="card-body">
                        <div className="w-full h-20 overflow-hidden">
                            <h2 className="w-full card-title">{blog.title}</h2>
                        </div>

                        <div className="h-36 overflow-hidden text-ellipsis text-base shadow-inner">
                            {!blog.description? `Add a description to your blog to make it more discoverable when people search for keywords. ${blog.title}`: blog.description}
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

                </div>)
            }

            
        </section>
    )
}

export default SearchResults;