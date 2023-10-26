'use client'
import Image from "next/image";
import profileImage from '@/app/assets/handsomeSelfie.png'
import { useGlobalContext } from "../utils/globalContext";
import { useFetchBlogs } from "../functions/getData";
import { LoginModal } from "../components/LoginModal";
import Link from "next/link";


const ProfilePage =()=>{
    const {user,isAuthenticated} = useGlobalContext();
    const URL = 'https://misterh-api-server.onrender.com/api/blogs';
    const {blogs} = useFetchBlogs(URL);
    const owner = user.name+" "+user.surname;
    const ownedBlogs = blogs.filter(blog => blog.name == owner);


    return(
        <div>
            {isAuthenticated?
                <>
                    <div className="relative w-full h-52 bg-white">
                        <div className="w-full absolute left-0 -bottom-20 flex justify-center items-center">
                            <div className="avatar">
                                <div className="w-40 h-40 rounded-full">
                                    <Image 
                                        src={profileImage.src} 
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
                </>:
                <>
                    <div className="w-full text-center min-h-full flex flex-col gap-10 pt-20">
                        <h1>Sing up or Login to view profile</h1>
                        <div className="w-fit mx-auto flex flex-col">
                            <button className="btn btn-primary btn-wide"
                            onClick={()=>window.location.reload()}
                            >
                                login
                            </button>
                            <Link href="#" className="link mt-4">
                                sign up
                            </Link>
                        </div>
                    </div>
                    <LoginModal/>
                </>
            }
        </div>
    )
}

export default ProfilePage;