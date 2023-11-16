import useAuth from "./useAuth"

const useLogout = () => {
    const { setAuth } = useAuth();
    return (
        <div>useLogout</div>
    )
}

export default useLogout