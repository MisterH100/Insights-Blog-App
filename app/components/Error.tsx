'use client';
interface IMessage{
    message:string
}
const Error = ({message}: IMessage)=>{
    const HandleReload =()=>{
        location.reload();
    }
    return(
        <div className="text-center">
            <h1>{message}</h1>
            <button onClick={HandleReload}className="btn btn-outline">Reload</button>
        </div>
    )
}

export default Error;