'use client'
import Link from "next/link";
import {useState} from "react";
import { useGlobalContext } from "../utils/globalContext";
import axios from "axios";

interface ILogin{
    email: string;
    password: string;
}


export const LoginModal = ()=>{
    const {setUser,setIsAuthenticated,loginRef,setToken} = useGlobalContext();
    const [login, setLogin] = useState({} as ILogin);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");


    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const HandleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault()
        if(login.email != null && login.password != null){
            setLoading(true)
            try {
                
                await axios.post("https://misterh-api-server.onrender.com/api/login", {
                    email: login.email,
                    password: login.password
                },
                {headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response: any) =>{
                    setLoading(false);
                    setUser(response.data.user);
                    setIsAuthenticated(true);
                    setToken(response.data.token)
                    loginRef.current?.close();
                })
            } catch (error: any) {
                setLoading(false);
                setStatus("failed to log in");
                console.log(error)
            }
        }
        setLoading(false)
    }


    return(
        <dialog ref={loginRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full h-fit p-0 last:overflow-hidden bg-transparent">
                <div className="w-full relative hero-content flex-col bg-white">
                    <form method="dialog">
                        <button 
                            className="btn btn-square absolute right-0 top-0 bg-transparent border-none outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </form>
                    <div className="text-center text-black">
                        <span className="text-red-500">{status}</span>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full">
                        <form className="card-body">
                            <div className="form-control">
                                <label htmlFor="email"
                                    className="label">
                                    <span className="label-text text-black">Email or Username</span>
                                </label>
                                <input 
                                    type="text"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="email or username" 
                                    className="input input-bordered bg-white text-black"
                                    autoComplete="true"
                                    required 
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="password" 
                                    className="label">
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
                                <span
                                    className="label">
                                    <Link 
                                        id="forgot_password"
                                        href="https://thehandsomedev.com/collab" target="_blank" 
                                        className="label-text-alt link link-hover text-black">
                                            Forgot password?
                                    </Link>
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary disabled:bg-slate-700"
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
                            <span
                                className="label w-full">
                                <Link 
                                    id="sign_up"
                                    href="https://thehandsomedev.com/collab" target="_blank"
                                    className="w-full link link-hover text-blue-700 text-center ">Sign up</Link>
                            </span>
                        </form>
                    </div>
                    </div>
                </div>

        </dialog>
    )
}