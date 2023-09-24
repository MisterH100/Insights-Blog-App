const Loading = () =>{
    return(
        <section className="absolute w-full animate-pulse" >
            <div className="w-full flex flex-wrap justify-center items-center gap-3 p-10 bg-base-100">
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700 "></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-3 p-10 bg-base-100">
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700 justify-self-start"></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 mt-2 w-20 bg-gray-700"></div>
                </div>
            </div>
        </section>
    )
}

export default Loading;