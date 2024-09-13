import { useState,useEffect } from "react";

const useOnline = ()=>{
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const handleOnline = ()=>{
        console.log("IsOnline is here")
        setIsOnline(true)
    }
    const handleOffline = ()=>{
        console.log("IsOffline is here")
        setIsOnline(false)
    }
    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)
        return ()=>{
            console.log("Cleaning the eventListener")
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])
    return isOnline
}
export default useOnline