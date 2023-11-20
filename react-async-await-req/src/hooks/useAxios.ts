import { useState, useEffect } from "react";

const useAxios = (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1);

    useEffect(() => {
        // const controller = new AbortController();
        let isMounted = true;
        const fetchData = async () => {
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
        fetchData();

        return () => {
            isMounted = false
            // controller.abort()
        };

    }, [])

    return [response, loading, error]
};


export default useAxios