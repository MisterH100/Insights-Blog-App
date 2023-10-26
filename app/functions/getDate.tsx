
export const getDate = (blogDate: Date)=>{
    const shortDate = new Date(blogDate).toLocaleString("en-ZA", {
        dateStyle: "short",
    })
    return shortDate;
} 