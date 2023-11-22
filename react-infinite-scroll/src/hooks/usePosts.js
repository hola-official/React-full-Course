import { useState, useEffect } from "react";
import { getPostPage } from "../api/axios";

const usePosts = (pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [isError, setIsError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller

    getPostPage(pageNum, { signal })
    .then(data => {
      setResults(prev => [...prev, ...data]);
      setHasNextPage(Boolean(data.length));
      setLoading(false)
    })
  }, []);

  return { loading, isError, error, results, hasNextPage };
};

export default usePosts;
