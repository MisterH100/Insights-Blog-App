
export const searchData = async (URL:string, setBlogState: any) => {
    try {
        const response = await fetch(URL);
        const data = response.json();
        setBlogState(await data);
    } catch (error) {
        console.log(error);
    }

    return[setBlogState]
}