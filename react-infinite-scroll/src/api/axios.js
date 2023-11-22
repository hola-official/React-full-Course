import axios from "axios";

export const api = axios.create( {
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

// Get all posts
export const getPostPage = async(pageParam = 1, options = {}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
}