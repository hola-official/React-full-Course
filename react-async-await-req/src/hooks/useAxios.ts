import { useState, useEffect } from "react";

const useAxios = (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    const [response, setResponse] = useState([]);
    const [Error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await axiosInstance[method.toLowerCase()](url,{
                    ...requestConfig, signal:controller.signal
                })
            } catch (error) {
                
            }
        }
    }, [])
};
