import { useState, useEffect } from "react";
import axios from "axios";

const UseAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetchData = async (url) => {
      setIsLoding(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoding(false);
      }
    };
    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [dataUrl]);
  return { data, fetchError, isLoding };
};

export default UseAxiosFetch;
