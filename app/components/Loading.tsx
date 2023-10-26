import Image from "next/image";
import loadingGif from '@/app/assets/linsightsloading.gif'

export const Loading = () =>{
    return(
        <div className="absolute pt-10 w-full h-screen flex justify-center items-center top-0 left-0">
            <div className="text-center">
                <Image
                    src={loadingGif}
                    alt="Insghts Loading"
                    width={200}
                    height={200}
                    priority
                />
                <span>Loading.....</span>
            </div>
        </div>
    )
}
