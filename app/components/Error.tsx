'use client';
interface IMessage{
    message:string
}
const Error = ({message}: IMessage)=>{
    const HandleReload =()=>{
        location.reload();
    }
    return(
        <div className="w-full pt-20 absolute flex flex-col items-center text-center">
            <h1>{message}</h1>
            <button onClick={HandleReload}className="btn btn-outline mt-10">Reload</button>
        </div>
    )
}

export default Error;