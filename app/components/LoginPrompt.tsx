'use client'
import { useGlobalContext } from "../utils/globalContext";
import Link from "next/link";


export const LoginPrompt = ()=>{
    const {loginRef} = useGlobalContext();
    return(
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
    )
}