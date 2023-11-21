import { useEffect } from "react";
import axios from "../api/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
  const [response, loading, error, axiosFetch] = useAxiosFunction();

  // const getData = () => {
  //     axiosFetch({
  //         axiosInstance: axios,
  //         url: '/posts',
  //         method: 'GET',
  //     })
  // }

  useEffect(() => {
    // To get data from the endpoint
    axiosFetch({
      axiosInstance: axios,
      url: "/posts",
      method: "GET",
    });
    // getData();
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      url: "/posts",
      method: "POST",
      requestConfig: {
        data: {
          userId: 1,
          id: 1,
          title: "Supreme",
          body: "Supremacy of the law...",
        },
      },
    });
  };
  return <div>Posts</div>;
};

export default Posts;
