import { useEffect, useState } from "react";
import { IBlog } from "../interfaces/BlogInterface";
import { useGlobalContext } from "../utils/globalContext";


export const useFetchBlogs = (URL: string) =>{
    const {setLoading} = useGlobalContext();
    const [blogs, setBlogs] = useState<IBlog[]>([{} as IBlog]);
    const [error, setError] = useState(false)
    const fetchData= async () => {
        try {
            setLoading(true)
            await fetch(URL)
            .then(async (response) =>{     
                const data = response.json();
                setBlogs(await data);
                setLoading(false)
            })
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return {blogs,error}
} 

export const useFetchBlog = (URL: string) =>{
    const {setLoading} = useGlobalContext();
    const [blog, setBlog] = useState<IBlog>({} as IBlog);
    const [error, setError] = useState(false);

    const fetchData= async () => {
        try {
            setLoading(true)
            await fetch(URL)
            .then(async (response) =>{     
                const data = response.json();
                setBlog(await data);
                setLoading(false)
            })
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return {blog,error}
}

export const useSearchBlogs = (URL: string) =>{
    const {setLoading} = useGlobalContext()
    const [blogs, setBlogs] = useState<IBlog[]>([{} as IBlog]);
    const fetchData= async () => {
        try {
            setLoading(true)
            await fetch(URL)
            .then(async (response) =>{     
                const data = response.json();
                setBlogs(await data);
                setLoading(false)
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    },[URL])

    return blogs
} 
