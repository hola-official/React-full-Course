import { useState, useEffect } from "react";

const useAxiosFunction = () => {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {
        const { axiosInstance, method, url, requestConfig = {} } = configObj;

        try {
            const ctrl = new AbortController()
            
            console.log(res);
            setResponse(res.data)

        } catch (err) {
            console.log(err);
            setError(err.message)
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        // const controller = new AbortController();
        let isMounted = true;
        return () => {
            isMounted = false
            // controller.abort()
        };

    }, [])

    return [response, loading, error]
};


export default useAxiosFunction