"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Blogs = ()=>{
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    }, 2000)
    })

    return(
        <section className="w-full flex flex-wrap justify-center gap-3 p-10 bg-base-100 text-base-content">
            {loading? <Loading/>:
                <>
                    <div className="card w-96 bg-base-200 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p className="h-36 overflow-hidden text-ellipsis text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus quibusdam consectetur. Similique esse reiciendis voluptas laborum corrupti, id fuga quidem dolores?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea, autem dolores labore culpa laudantium minus ipsam aspernatur animi architecto ratione sit modi ex. Repellat dolorem voluptate ut earum consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate harum iure in distinctio sunt beatae culpa aliquam magnam voluptates ex asperiores nostrum, perferendis animi, eaque vitae dolorem corrupti quo.
                            </p>
                            <div className="card-actions justify-center">
                            <Link href={'/blogs/1'}>
                                <button className="btn btn-outline bg-base-300">View Blog</button>
                            </Link>
                            </div>
                        </div>

                    </div>

                    <div className="card w-96 bg-base-200 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p className="h-36 overflow-hidden text-ellipsis text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis nam harum aspernatur dignissimos a eum odit accusamus quibusdam consectetur. Similique esse reiciendis voluptas laborum corrupti, id fuga quidem dolores?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea, autem dolores labore culpa laudantium minus ipsam aspernatur animi architecto ratione sit modi ex. Repellat dolorem voluptate ut earum consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate harum iure in distinctio sunt beatae culpa aliquam magnam voluptates ex asperiores nostrum, perferendis animi, eaque vitae dolorem corrupti quo.
                            </p>
                            <div className="card-actions justify-center">
                            <Link href={'/blogs/1'}>
                                <button className="btn btn-outline bg-base-300">View Blog</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
            
        </section>
    )
}

export default Blogs;