
export const getDate = (blogDate: Date)=>{
    const shortDate = blogDate.toLocaleString().slice(0,10);
    return shortDate;
} 