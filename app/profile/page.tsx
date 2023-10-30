'use client'
import Image from "next/image";
import profileImage from '@/app/assets/userimage.png'
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import Link from "next/link";
import { Loading } from "../components/Loading";


const ProfilePage =()=>{
    const {user,isAuthenticated,loginRef,logOut,loading} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs} = useFetchBlogs(URL);
    const owner = user?.email
    const ownedBlogs = blogs.filter(blog => blog.publisher == owner);


    return(
        <div className="w-full min-h-screen">
            {isAuthenticated?
                loading?<Loading/>:
                <>
                    <div className="relative w-full h-52 bg-white">
                        <div className="w-full absolute left-0 -bottom-20 flex justify-center items-center">
                            <div className="avatar">
                                <div className="w-40 h-40 rounded-full">
                                    <Image 
                                        src={user.profileImage.image_url?user.profileImage.image_url:profileImage.src} 
                                        alt="profile image"
                                        width={100}
                                        height={100} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-20 text-center">
                        <h1 className="font-bold text-3xl text-white">{user.username}</h1>
                        <h2 className="font-bold text-md text-white opacity-50">{user.email}</h2>
                    </div>

                    <div className="stats shadow w-full">
                        <div className="stat place-items-center">
                            <div className="stat-title">Blogs</div>
                            <div className="stat-desc">{ownedBlogs.length}</div>
                        </div>
                    
                        <div className="stat place-items-center">
                            <div className="stat-title">followers</div>
                            <div className="stat-desc">0</div>
                        </div>
                    
                        <div className="stat place-items-center">
                            <div className="stat-title">Joined</div>
                            <div className="stat-desc">{new Date(user.createdAt).toLocaleDateString()}</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:hidden">
                        <div className="stack">
                            {blogs.map((blog,index)=>
                                <div key={index} className="card w-72 bg-base-300 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.title}</h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <div className="w-full hidden md:block overflow-hidden">
                        <div className="flex gap-4 justify-center">
                            {blogs.map((blog,index)=>
                                <div key={index} className="card w-72 bg-base-300 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.title}</h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <div className="mt-20 w-fit mx-auto">
                        <button
                            onClick={logOut}
                            className="btn btn-warning"
                            >logout
                        </button>
                    </div>
                </>:
                <>
                    <div className="w-full text-center min-h-full flex flex-col gap-10 pt-20">
                        <h1>Sing up or Login to view profile</h1>
                        <div className="w-fit mx-auto flex flex-col">
                            <button className="btn btn-primary btn-wide"
                            onClick={()=>loginRef.current?.showModal()}
                            >
                                login
                            </button>
                            <Link href="#" className="link mt-4">
                                sign up
                            </Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProfilePage;