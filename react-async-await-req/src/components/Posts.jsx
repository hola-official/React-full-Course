import { useEffect } from "react";
import axios from "../api/jsonPH";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
    const [posts, loading, error, axiosFetch] = useAxiosFunction();

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
    return (
        <article>
            <h2>Posts</h2>

            {loading && <p>loading...</p>}

            {!loading && error && <p className="errMsg">{error}</p>}

            {!loading && !error && posts?.length && <ul>
                {
                    posts.map((post, i) => <li key={i}>{post.id}. {post.body}</li>)
                }
            </ul>}

            {!loading && !error && !posts && <p>No Joke display! 🙂</p>}
        </article>
    );
};

export default Posts;
