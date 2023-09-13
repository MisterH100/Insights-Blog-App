const Loading = () =>{
    return(
        <section className="absolute w-full animate-pulse" >
           <article className="w-full h-[200px] flex justify-center items-center">
                <div className="w-full md:w-[50%] h-full md:h-[80%] p-3 flex items-center bg-base-200 rounded shadow-2xl gap-2">
                    <div className="h-24 w-28 bg-gray-700">
                        <svg className="w-10 h-10 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-700 w-full mb-2.5"></div>
                        <div className="h-2 bg-gray-700 w-full mb-2.5"></div>
                        <div className="h-2 bg-gray-700 w-full mb-2.5"></div>
                    </div>
                </div>
            </article>
            <div className="w-full flex flex-wrap justify-center items center gap-3 p-10 bg-base-100">
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 w-20 m-auto bg-gray-700"></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 w-20 m-auto bg-gray-700"></div>
                </div>
                <div className="card w-96 h-72 bg-base-200 shadow-2xl p-4">
                    <div className="h-4 bg-gray-700 w-48 mb-4"></div>
                    <div className="h-36 bg-gray-700 w-full"></div>
                    <div className="h-12 w-20 m-auto bg-gray-700"></div>
                </div>
            </div>
        </section>
    )
}

export default Loading;