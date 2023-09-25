export const Loading = () =>{
    return(
        <section className="absolute w-full animate-pulse p-10">
            <div className="w-full flex flex-wrap justify-evenly gap-3 bg-base-100">
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700 "></div>
                </div>
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-evenly gap-3 bg-base-100">
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700 justify-self-start"></div>
                </div>
                <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4 mb-10">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
            </div>
        </section>
    )
}

export const BlogLoading =()=>{
    return( 
        <section className="absolute z-10 left-0 top-0 w-full h-full flex justify-center items-center bg-base-100">
            <div className="w-full min-w-full flex flex-col md:items-center min-h-screen px-2 md:px-20 animate-pulse">
                <div className="w-full flex justify-start items-center gap-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <div className="w-28 h-28 bg-gray-700 "> </div>
                        </div>
                    </div>
                    <div className="w-40 h-20 text-sm md:text-base bg-gray-700"></div>
                </div>
                <div className="min-w-full h-[500px] bg-gray-700 mt-10"></div>
            </div>
        </section>
    )
}

export const WelcomeBlogLoading =()=>{
    return(
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center animate-pulse">
            <div className="w-full md:w-2/5 bg-base-200 p-10 mb-10">
                <div className="h-12 mt-2 w-full bg-gray-700"></div>
                <div className="h-24 mt-2 w-full bg-gray-700"></div>
            </div>
            <div className="w-full card md:w-96 h-72 bg-base-200 shadow-2xl p-4">
                <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                <div className="h-36 bg-gray-700 w-full"></div>
                <div className="h-12 mt-2 w-20 bg-gray-700"></div>
            </div>
   
        </div>
    )
}