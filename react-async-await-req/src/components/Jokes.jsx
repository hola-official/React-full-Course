import axios from "../api/dadjokes"
import useAxios from "../hooks/useAxios"

const Jokes = () => {
    const [joke, error, loading] = useAxios({
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
        </article>
    )
}

export default Jokes