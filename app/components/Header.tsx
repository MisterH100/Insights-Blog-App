import Link from "next/link";
import SearchBox from "./SearchBox";
import Image from "next/image";
import insightsLogo from "../assets/insightslogo.svg";

const Header =()=>{
    return(
        <header className="w-full shadow-xl drop-shadow-lg bg-base-100 text-base-content">
            <div className="flex flex-col md:flex-row navbar">
                <div className="flex-1 font-title">
                    <Link href={'/'} className="normal-case text-5xl">
                       <Image
                            src={insightsLogo}
                            alt="Insghts Logo"
                       />    
                    </Link>
                </div>
                <div className="w-full px-10 md:px-2 pt-10 md:pt-0 md:w-auto flex justify-between md:flex-none gap-2">
                   <SearchBox/>
                </div>
            </div>
        </header>
    )
}

export default Header;