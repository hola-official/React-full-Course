import { createContext, useEffect, useState } from "react";
import UseWindowSize from "../hooks/UseWindowSize";
import UseAxiosFetch from "../hooks/UseAxiosFetch";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([])
    const { width } = UseWindowSize();
    const { data, fetchError, isLoading } = UseAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        const filterResult = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResult(filterResult.reverse());
    }, [posts, search]);

    return (
        <DataContext.Provider value={{
            width, search, setSearch,   // header and nav bar
            posts, fetchError, isLoading, searchResult, setPosts, // home
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext