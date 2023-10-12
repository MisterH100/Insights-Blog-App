"use client"
import { useState } from "react"

const SearchBox = () =>{
    const [query, setQuery] = useState("")

    return(
        <form action={`/blogs/search?${query}`} className="w-full md:w-auto form-control">
            <input 
                type="text"
                name="query"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search" 
                className="input input-bordered input-sm bg-white w-full md:focus:w-96 shadow-inner text-base-content" 
            />
        </form>
    )
}

export default SearchBox;