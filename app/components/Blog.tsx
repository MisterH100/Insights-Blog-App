import Link from "next/link";

const Blog =({BlogPost}: any)=>{
    return(
        <section className="w-full p-10 bg-base-100 text-base-content">
            <article className="w-full flex flex-col md:items-center min-h-screen px-2 md:px-10">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-24 rounded bg-slate-400">
                                <img 
                                    src="" 
                                    alt="image"
                                />
                            </div>
                        </div>
                        <ul>
                            <li>
                              {BlogPost}
                            </li>
                            <li>
                                00/00/00
                            </li>
                            <li className="text-sm">
                                Powered by @insights
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-6 prose">
                    <h1>Hello there</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum debitis incidunt quia eos. Ea possimus voluptas modi reprehenderit tempora, autem quo nostrum sed laborum consectetur officiis quis dolorem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam vitae aspernatur dolorum error officiis ipsam ratione! Consequatur iure excepturi ratione, nesciunt alias molestiae saepe voluptatibus est officia aperiam minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sed! Ducimus, tempora ea! Animi reiciendis eum vitae cum cupiditate quibusdam voluptatum, minima deserunt aliquid sit, veritatis architecto natus, laudantium est.
                    </p>
                </div>
                <Link href={'/'}>
                    <button className="btn btn-outline bg-base-300">Back to blogs</button>
                </Link>

            </article>
    </section>
    )
}

export default Blog;


