import Link from "next/link";

const Blogs = ()=>{
    return(
        <section className="w-full flex flex-wrap justify-center gap-3 p-10">
            <div className="card w-96 bg-[#112131] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p className="h-32 overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus quibusdam consectetur. Similique esse reiciendis voluptas laborum corrupti, id fuga quidem dolores?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea, autem dolores labore culpa laudantium minus ipsam aspernatur animi architecto ratione sit modi ex. Repellat dolorem voluptate ut earum consequuntur.
                    </p>
                    <div className="card-actions justify-center">
                    <Link href={'/1'}>
                        <button className="btn btn-outline">View Blog</button>
                    </Link>
                    </div>
                </div>
            </div>
            
            <div className="card w-96 bg-[#112131] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus quibusdam consectetur. Similique esse reiciendis voluptas laborum corrupti, id fuga quidem dolores?</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline">View Blog</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-[#112131] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus quibusdam consectetur. Similique esse reiciendis voluptas laborum corrupti, id fuga quidem dolores?</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline">View Blog</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-[#112131] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus?</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline">View Blog</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs;