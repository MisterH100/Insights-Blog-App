
export const getDate = (blodDate: Date)=>{
    const shortDate = blodDate.toLocaleString().slice(0,10);
    return shortDate;
} 