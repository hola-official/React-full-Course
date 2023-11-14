import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({childiren}) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {childiren}
        </AuthContext.Provider>
    )
}

export default AuthContext