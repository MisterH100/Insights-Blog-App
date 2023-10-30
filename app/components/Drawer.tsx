import Link from "next/link";
import {usePathname } from "next/navigation";
import { useGlobalContext } from "../utils/globalContext";


export const Drawer = () =>{
    const pathname = usePathname();
    const {logOut,isAuthenticated,loginRef} = useGlobalContext();
    return(
        <div className="drawer drawer-end block md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="block md:hidden pl-8 cursor-pointer">
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
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay pl-40"></label>
                <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                    <li>
                        <Link href={"/"} className="flex items-center gap-2 hover:text-black">
                        
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
                        <Link href={"/blogs/search"} className="flex items-center gap-2 hover:text-black">   
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
                        <Link href={"/profile"} className="flex items-center gap-2 hover:text-black"> 
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
                    <li className="mt-10 w-full mx-auto">
                        {isAuthenticated?
                            <button
                                onClick={logOut}
                                className="btn btn-warning hover:bg-yellow-300 hover:text-black"
                                >Logout
                            </button>:
                            <button
                                onClick={()=>loginRef.current?.showModal()}
                                className="btn btn-primary hover:bg-yellow-300 hover:text-black"
                                >login
                            </button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}