import { useEffect, useState } from "react"
import useAxiosPrivate from "../hook/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom";
// import axios from "../api/axios"
// import useRefreshToken from "../hook/useRefreshToken"

const User = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    // const refresh = useRefreshToken()

    // const navigate = useNavigate()
    // const location = useLocation()

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                })
                console.log(response.data);
                isMounted && setUsers(response.data)
            } catch (error) {
                console.log(error);
                // navigate('/login', { state: { from: location }, replace: true })
            }
        }
        getUsers()
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>User List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i} >{user?.
                            username}</li>)}
                    </ul>
                ) : <p>No user to display</p>
            }
            {/* <button onClick={() => refresh()} >Refresh</button> */}
            <br />
        </article>
    )
}

export default User
