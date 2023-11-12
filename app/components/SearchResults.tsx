"use client"
import { IBlog } from "../interfaces/BlogInterface"
import Link from "next/link"
import insightsLogo from "../assets/insightslogo.svg";
import Image from "next/image";
import { NoResults } from "./Error";
import { useGlobalContext } from "../utils/globalContext";
import { Loading } from "./Loading";


const SearchResults =({blogs}:{blogs:IBlog[]})=>{
    const {loading} = useGlobalContext();

    return(
        <section className="relative w-full gap-3 p-10 bg-base-100 text-base-content">
            <h1 className="font-bold text-3xl p-4">Results:</h1>
            {loading?<Loading/>:blogs.length < 1?<NoResults/>:
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 ">
                    {blogs.map(blog =>
                        <div key={blog._id} className="card card-compact min-w-96 shadow-sm shadow-gray-800  text-white">
                            <div className="bg-white rounded-tr-md rounded-tl-md h-20 flex justify-center items-center">
                                <Image
                                    src={insightsLogo}
                                    alt="Insghts Logo"
                                    priority
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
        </section>
    )
}

export default SearchResults;