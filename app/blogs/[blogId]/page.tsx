import Blog from "@/app/components/Blog";
type Params ={
    params:{
        blogId: string;
    }
}
const BlogPage =({params:{blogId},}: Params)=>{ 
    return(
        <Blog BlogPostId={blogId}/>
    )
}

export default BlogPage;