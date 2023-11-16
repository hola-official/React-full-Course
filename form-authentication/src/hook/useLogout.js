import useAuth from "./useAuth"

const useLogout = () => {
    const { setAuth } = useAuth();

    const logOut = async () => {
        setAuth({});
    }
    return (
        <div>useLogout</div>
    )
}

export default useLogout