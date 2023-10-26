'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import { usePathname,useRouter } from "next/navigation";
import { useGlobalContext } from "../utils/globalContext";
import axios from "axios";

interface ILogin{
    username: string;
    password: string;
}


export const LoginModal = ()=>{
    const pathname = usePathname();
    const router = useRouter();
    const {setUser,loading,setLoading,setIsAuthenticated,loginRef} = useGlobalContext();
    const [login, setLogin] = useState({} as ILogin);
    const [status, setStatus] = useState("");


    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const HandleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault()
        if(login.username != null){
            setLoading(true)
            try {
                
                await axios.post("https://misterh-api-server.onrender.com/api/login", {
                    username: login.username,
                    password: login.password
                },
                {headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response: any) =>{
                    setLoading(false);
                    setUser(response.data.user);
                    setIsAuthenticated(true);
                    loginRef.current?.close();
                })
            } catch (error: any) {
                setLoading(false);
                setStatus(error.response.data);
            }
        }
        setLoading(false)
    }


    return(
        <dialog ref={loginRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full h-fit p-0 last:overflow-hidden bg-transparent">
                <div className="w-full relative hero-content flex-col bg-white">
                    {pathname == "/profile"?
                        <button
                            onClick={()=>router.push("/")}
                            className="btn btn-square absolute right-0 top-0 bg-transparent border-none outline-none">
                            <svg 
                                className="w-6 h-6" 
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="none"
                                viewBox="0 0 20 20">
                                <path 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                                />
                            </svg>
                        </button>:
                        <form method="dialog">
                            <button 
                                className="btn btn-square absolute right-0 top-0 bg-transparent border-none outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </form>
                    }
                    <div className="text-center text-black">
                        <span>{status}</span>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input 
                                    type="text"
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                    placeholder="email" 
                                    className="input input-bordered bg-white text-black" 
                                    required 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}                                   
                                    placeholder="password" 
                                    className="input input-bordered bg-white text-black" 
                                    required 
                                />
                                <label 
                                    className="label">
                                    <Link href="#" className="label-text-alt link link-hover text-black">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                    disabled={loading?true:false}
                                    onClick={HandleSubmit}
                                    >
                                        {
                                            loading?
                                            <span className="loading loading-spinner"></span>:
                                            "Login"
                                        }
                                </button>
                            </div>
                            <label 
                                className="label w-full">
                                <Link href="#" className="w-full link link-hover text-blue-700 text-center">Sign up</Link>
                            </label>
                        </form>
                    </div>
                    </div>
                </div>

        </dialog>
    )
}