import Link from "next/link";

const Blog =()=>{
    return(
        <section className="p-10 bg-base-100 text-base-content">
            <article className="min-h-screen px-2 md:px-10">
                <div className="hero-content block">
                    <div className="py-4">
                        <div className="flex items-start gap-2">
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
                                <p className="stat-value text-sm">00/00/00</p>
                                <p className="stat-desc">insights</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum debitis incidunt quia eos. Ea possimus voluptas modi reprehenderit tempora, autem quo nostrum sed laborum consectetur officiis quis dolorem error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam vitae aspernatur dolorum error officiis ipsam ratione! Consequatur iure excepturi ratione, nesciunt alias molestiae saepe voluptatibus est officia aperiam minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sed! Ducimus, tempora ea! Animi reiciendis eum vitae cum cupiditate quibusdam voluptatum, minima deserunt aliquid sit, veritatis architecto natus, laudantium est.
                    </p>
                    <Link href={'/'}>
                        <button className="btn btn-outline bg-base-300">Back to blogs</button>
                    </Link>
                </div>

            </article>
    </section>
    )
}

export default Blog;