'use client'
import Blogs from "../components/Blogs";
import {useSearchParams } from "next/navigation";
const BlogsPage =()=>{
    const pb = useSearchParams();
    const publisher = pb.get("pb")

    return(
        <div className="w-full min-h-screen">
            <Blogs filter= {publisher}/>
        </div>
    )
}

export default BlogsPage;