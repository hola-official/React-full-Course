import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hook/useRefreshToken";
import useAuth from "../hook/useAuth";

const PersistLogin = () => {
    const [isLoding, setIsLoding] = useState(true)
    const refresh = useRefreshToken();
}
export default PersistLogin