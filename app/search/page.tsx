'use client'
import Blogs from "@/app/components/Blogs";
import { useState } from "react";
import {useRouter,useSearchParams } from "next/navigation";
import SearchResults from "@/app/components/SearchResults";
import { useSearchBlogs } from "@/app/functions/getData";
import { useGlobalContext } from "@/app/utils/globalContext";

const SearchPage =()=>{
    const {setLoading} = useGlobalContext()
    const router = useRouter();
    const s = useSearchParams();
    const search = s.get("s");
    const SEARCH_URL = `https://misterh-api-server.onrender.com/api/blogs/search/${search}`;
    const blogs = useSearchBlogs(SEARCH_URL);
    const [query, setQuery] = useState("");

    const HandleSearch = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault(); 
        router.push(`/blogs/search?s=${query}`)
    };

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(e.target.value)
        setLoading(true)
        router.push(`/blogs/search?s=${query}`)
        setLoading(false)
    };


    return (
        <main className="w-full min-h-full bg-base-100">
            <form className="w-full flex justify-center items-center pt-10">
                <div className="flex items-center border">
                    <input 
                        type="text" 
                        placeholder="Search blogs" 
                        className="input input-bordered w-64 bg-white text-black"
                        required
                        onChange={HandleChange}
                    />
                    <button className="px-4"
                        onClick={HandleSearch}
                    >  
                        <svg 
                            className="w-6 h-6 text-white" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </form>
            {query.length > 0?
                <SearchResults blogs={blogs}/>:
                <Blogs filter=""/>
            }
        </main>
    )
}

export default SearchPage;