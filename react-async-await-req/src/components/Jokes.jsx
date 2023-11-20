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
        </article>
    )
}

export default Jokes