import Blog from "@/app/components/Blog";

const BlogPage =({params:{blogId},}: {params:{blogId: string}})=>{
    console.log(blogId) 
    return(
        <Blog BlogPost={blogId}/>
    )
}

export default BlogPage;