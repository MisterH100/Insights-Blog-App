import Blog from "@/app/components/Blog";

const BlogPage =({params:{blogId}}: {params:{blogId: string}})=>{ 
    return(
        <Blog BlogPostId={blogId}/>
    )
}

export default BlogPage;