const Profile =()=>{
    return(
        <section className="bg-base-100 text-base-content">
            <div className="hero min-h-screen flex items-start p-10">
                <div className="hero-content flex-col lg:flex-row items-start md:border-r-2">
                    <div>
                        <div className="bg-slate-500 h-60 w-60">

                        </div>
                        <ul className="flex flex-col justify-center items-center">
                            <li>log out</li>
                            <li>Delete profile</li>
                            <li>help</li>
                        </ul>
                    </div>
                    <div className="max-w-xs">
                        <h1 className="text-5xl font-bold">Username</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;