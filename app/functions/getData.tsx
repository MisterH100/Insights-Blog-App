import { Dispatch, SetStateAction } from "react";
import { IBlog } from "../interfaces/BlogInterface";

export const fetchData= async (URL:string, setBlogState:Dispatch<SetStateAction<IBlog[]>>| Dispatch<SetStateAction<IBlog>>,setFailedState:Dispatch<SetStateAction<boolean>>,setLoadingState:Dispatch<SetStateAction<boolean>>) => {
    try {
        const response = await fetch(URL);
        const data = response.json();
        setBlogState(await data);
        setLoadingState(false)
    } catch (error) {
        setFailedState(true)
        console.log(error);
    }

    return[setBlogState,setFailedState,setLoadingState]
}