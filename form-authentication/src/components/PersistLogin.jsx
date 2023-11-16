import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hook/useRefreshToken";
import useAuth from "../hook/useAuth";

const PersistLogin = () => {
    const [isLoding, setIsLoding] = useState(true)
    const refresh = useRefreshToken();

    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
              await refresh()  
            } catch (error) {
                console.error(error);
            } finally
        }
    }, [])
}

export default PersistLogin