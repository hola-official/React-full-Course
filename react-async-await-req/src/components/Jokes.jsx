import axios from "../api/dadjokes"
import useAxios from "../hooks/useAxios"

const Jokes = () => {
    const [joke, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: "GET",
        url: "/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US"
            }
        }
    })
    return (
        <article>
            <h2>Random Dad Jokes.</h2>

            {loading && <p>loading...</p>}

            {!loading && error && <p className="errMsg">{error}</p>}

            {!loading && !error && joke && <p>{joke?.joke}</p>}

            {!loading && !error && !joke && <p>No Joke display! 🙂</p>}

            <button></button>
        </article>
    )
}

export default Jokes