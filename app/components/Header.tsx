'use client'
import Link from "next/link";
import Image from "next/image";
import insightsLogo from "../assets/insightslogo.svg";
import profileImage from "../assets/handsomeSelfie.png";
import {usePathname } from "next/navigation";
import { useGlobalContext } from "../utils/globalContext";

const Header =()=>{
    const pathname = usePathname();
    const {user} = useGlobalContext();
    return(
        <header className="sticky top-0 left-0 z-10 w-full shadow-xl drop-shadow-lg bg-white">
            <div className="flex navbar justify-between">
                <div className="flex-shrink-0 font-title">
                    <Link href={'/'} className="normal-case text-5xl">
                       <Image
                            src={insightsLogo}
                            alt="Insghts Logo"
                            priority
                       />    
                    </Link>
                </div>
                <nav>
                    <ul className="hidden md:flex justify-center items-center gap-8 text-black">
                        <li>
                            <Link href={"/"} className="flex items-center gap-2">
                            
                                <svg 
                                    className="w-6 h-6 text-black " 
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                    fill={pathname == "/"? "black": "none"}
                                    viewBox="0 0 20 20">
                                    <path 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                                    />
                                </svg>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blogs/search"} className="flex items-center gap-2">   
                                <svg 
                                className="w-6 h-6 text-black" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill={pathname == "/blogs/search"? "black": "none"}
                                viewBox="0 0 20 20">
                                <path 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                                </svg>
                                search
                            </Link>
                        </li>

                        <li>
                            <Link href={"/profile"} className="flex items-center gap-2"> 
                                <svg 
                                    className="w-6 h-6 text-black" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill={pathname == "/profile"? "black": "none"}
                                    viewBox="0 0 14 18">
                                    <path 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                                    />
                                </svg>
                                profile
                            </Link>
                        </li>
                    </ul>
                    {user.username != null?
                        <div className="hidden md:flex gap-2 items-center flex-shrink text-black ml-8">
                            <div>
                                <h1 className="font-bold">{user.name} {user.surname}</h1>
                                <h3 className="text-sm opacity-50">{user.username}</h3>
                            </div>

                            <div className="avatar">
                                <div className="w-20 h-20 rounded-full">
                                    <Image 
                                        src={profileImage.src} 
                                        alt="profile image"
                                        width={100}
                                        height={100} 
                                    />
                                </div>
                            </div>
                        </div>:
                        null
                    }   
                    <span className="px-8 block md:hidden">
                        <Link href={"/blogs/search"} className="flex items-center gap-2">   
                            <svg 
                            className="w-6 h-6 text-black" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill={pathname == "/blogs/search"? "black": "none"}
                            viewBox="0 0 20 20">
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                            </svg>
                        </Link>
                    </span>
                    <button className="block md:hidden">
                        <svg 
                            className="w-6 h-6 text-black" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 16 12">
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" d="M1 1h14M1 6h14M1 11h7"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;