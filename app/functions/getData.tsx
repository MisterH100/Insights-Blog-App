
export const fetchData = async (URL:string, setBlogState: any,setIsLoadedState: any) => {
    try {
        const response = await fetch(URL);
        const data = response.json();
        setBlogState(await data);
    } catch (error) {
        setIsLoadedState(false)
        console.log(error);
    }

    return[setBlogState,setIsLoadedState]
}