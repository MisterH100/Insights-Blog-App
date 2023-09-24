import { Dispatch, SetStateAction } from "react";
import { IBlog } from "../interfaces/BlogInterface";

export const fetchData= async (URL:string, setBlogState:Dispatch<SetStateAction<IBlog[]>>,setFailed:Dispatch<SetStateAction<boolean>>,setLoading:Dispatch<SetStateAction<boolean>>) => {
    try {
        const response = await fetch(URL);
        const data = response.json();
        setBlogState(await data);
        setLoading(false)
    } catch (error) {
        setFailed(true)
        console.log(error);
    }

    return[setBlogState,setFailed,setLoading]
}