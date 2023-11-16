import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hook/useRefreshToken";
import useAuth from "../hook/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken();

    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
              await refresh()  
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
    }, [])
}

export default PersistLogin