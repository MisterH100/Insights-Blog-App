const User = ()=>{
    return(
        <article className="w-full h-[200px] flex justify-center items-center text-base-content">
            <div className="w-full md:w-[50%] h-full md:h-[80%] p-3 flex items-center bg-base-200 rounded shadow-2xl">
                <div className="avatar">
                    <div className="w-24 rounded bg-slate-400">

                    </div>
                </div>
                <div className="w-full h-full p-3">
                    <h1 className="w-full h-[10%] font-semibold"></h1>
                    <div className="w-full h-[80%] mt-2 overflow-hidden text-ellipsis">
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default User