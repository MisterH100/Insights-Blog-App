import Link from "next/link";

const Blog =()=>{
    return(
        <section className="p-10">
            <article className="min-h-screen px-2 md:px-10">
                <div className="hero-content">
                    <div className="w-full">
                        <div className="py-4">
                            <div className="flex items-center gap-2 w-20">
                                <div className="avatar">
                                    <div className="w-24 rounded bg-slate-400">
                                        <img 
                                            src="" 
                                            alt="image"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="stat-title">Name</p>
                                    <p className="stat-value text-base">00/00/00</p>
                                    <p className="stat-desc">insights</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum debitis incidunt quia eos. Ea possimus voluptas modi reprehenderit tempora, autem quo nostrum sed laborum consectetur officiis quis dolorem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam vitae aspernatur dolorum error officiis ipsam ratione! Consequatur iure excepturi ratione, nesciunt alias molestiae saepe voluptatibus est officia aperiam minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sed! Ducimus, tempora ea! Animi reiciendis eum vitae cum cupiditate quibusdam voluptatum, minima deserunt aliquid sit, veritatis architecto natus, laudantium est.
                        </p>
                        <Link href={'/'}>
                            <button className="btn btn-outline">Back to blogs</button>
                        </Link>
                    </div>
                </div>
            </article>
    </section>
    )
}

export default Blog;