import Link from "next/link";

const Header =({children}: {children: React.ReactNode})=>{
    return(
        <header className="shadow-xl drop-shadow-lg bg-base-100 text-base-content">
            <div className="navbar h-32">
                <div className="flex-1 font-title">
                    <Link href={'/'} className="btn btn-ghost normal-case text-2xl font-extrabold">Insights</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="input input-bordered input-sm bg-base-200 w-full max-w-xs md:focus:w-96 shadow-inner text-base-content" 
                        />
                    </div>

                    <div className="dropdown dropdown-end">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>

                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>{children}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;