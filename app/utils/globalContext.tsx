'use client'

import {useContext,createContext, useState, useEffect, useRef} from 'react';
import { useLocalStroge } from './useLocalStorage';
import axios from 'axios';

export interface ILogin{
    username: string;
    password: string;
}

export interface IUser{
    _id: number, 
    name: string,
    surname: string,
    username: string;
    email: string;
    admin: boolean;
    role: string;
    profileImage: {
        data: string;
        image_url: string;
        contentType: string;
    }
    createdAt: Date;   
}

interface IGlobalContext{
    login: ILogin;
    setLogin: (React.Dispatch<React.SetStateAction<ILogin>>);
    user: IUser;
    setUser: (React.Dispatch<React.SetStateAction<IUser>>);
    token: string;
    setToken: (React.Dispatch<React.SetStateAction<string>>);
    isAuthenticated: boolean;
    setIsAuthenticated: (React.Dispatch<React.SetStateAction<boolean>>);
    logOut: () => void;
    loading: boolean;
    setLoading: (React.Dispatch<React.SetStateAction<boolean>>);
    loginRef: (React.RefObject<HTMLDialogElement>);

}
const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}:{children: React.ReactNode})=>{
    const [login, setLogin] = useState({} as ILogin);
    const [user, setUser] = useState({} as IUser);
    const [token, setToken] = useLocalStroge<string>("token", " ");
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [loading, setLoading] = useState(false)
    const loginRef = useRef<HTMLDialogElement>(null);

    const checkAuth = async() =>{
        setLoading(true)
        try {
            
            await axios.post("https://misterh-api-server.onrender.com/api/auth",{
                username: user.username
            },
            {headers: {
              'auth-token': token,
            }}).then(response =>{
              setIsAuthenticated(response.data.authenticated)
              setUser(response.data.user);
              setLoading(false);
              isAuthenticated?loginRef.current?.close(): loginRef.current?.showModal();
            })
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
        }
    }

    useEffect(()=>{
        checkAuth()
        if(isAuthenticated){
            loginRef.current?.close()
        }
    },[isAuthenticated])  

    const logOut = () =>{
        window.location.href = "/"
        setIsAuthenticated(false);
        setToken(" ");
    }

    return(
        <GlobalContext.Provider value={
            {
                login,setLogin,
                user,setUser,
                token,setToken,
                isAuthenticated, setIsAuthenticated,
                logOut,
                loading,setLoading,
                loginRef
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)