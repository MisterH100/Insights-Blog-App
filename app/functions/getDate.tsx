
export const getDate = (blogDate: Date)=>{
    const shortDate = blogDate.toLocaleString("en-ZA", {
        dateStyle: "short",
    }).replace("-","/").slice(0,7);

    return shortDate;
} 