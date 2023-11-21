import { useState, useEffect } from "react";

const useAxiosFunction = () => {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState();

    const axiosFetch = async (configObj) => {
        const { axiosInstance, method, url, requestConfig = {} } = configObj;

        try {
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                // signal: controller.signal
            })
            console.log(res);
            isMounted && setResponse(res.data)

        } catch (err) {
            console.log(err);
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // const controller = new AbortController();
        let isMounted = true;
        const fetchData = async () => {
           
        }
        fetchData();

        return () => {
            isMounted = false
            // controller.abort()
        };

    }, [reload])

    return [response, loading, error, refetch]
};


export default useAxiosFunction