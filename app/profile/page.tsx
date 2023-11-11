'use client'
import { useGlobalContext } from "../utils/globalContext";
import { Profile } from "../components/Profile";
import { LoginPrompt } from "../components/LoginPrompt";


const ProfilePage =()=>{
    const {isAuthenticated} = useGlobalContext();
    return(
        <div className="w-full min-h-screen">
            {isAuthenticated?
                <Profile/>:
                <LoginPrompt/>
            }
        </div>
    )
}

export default ProfilePage;