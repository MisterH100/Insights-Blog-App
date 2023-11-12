import { PublisherList } from "../components/PublisherList";


const ProfilePage =()=>{
    return(
        <div className="w-full min-h-screen md:px-20 bg-base-100">
            <h1 className="font-bold text-3xl p-4">Blog publishers:</h1>
            <PublisherList/>
        </div>
    )
}

export default ProfilePage;