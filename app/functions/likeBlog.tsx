
export const likePost = (blogPostId: number|any): any=>{
  fetch(`https://misterh-api-server.onrender.com/api/blogs/like/${blogPostId}`, {
    method: "POST",
    body: JSON.stringify({
      action: 'Like'
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
}

