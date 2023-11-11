'use client';
import Image from "next/image";
import noresults from '@/app/assets/not-found.svg';
import error from '@/app/assets/error.svg'

interface IMessage{
    message:string
}
export const ErrorMessage = ({message}: IMessage)=>{
    const HandleReload =()=>{
        location.reload();
    }
    return(
        <div className="w-full h-screen pt-20 absolute top-0 left-0 flex items-center justify-center text-center pointer-events-auto">
            <div>
                <div className="text-center">
                    <Image
                        src={error}
                        alt="error"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <h1>{message}</h1>
                <button onClick={HandleReload}className="btn btn-outline mt-10">Reload</button>
            </div>
        </div>
    )
}

export const NoResults = () =>{
    return(
        <div className="w-full text-center text-white">
            <Image
                className="mx-auto"
                src={noresults}
                alt="Insghts Loading"
                width={200}
                height={200}
            />
        <span>blogs not found</span>
    </div>
    )
}