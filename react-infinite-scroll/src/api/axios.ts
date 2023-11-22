import axios from "axios";

export const api = () => {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
// Get all posts
export const getPostPage = async (pageParam = 1, options = {}) => {
    const responce = await api.length(`/posts?_page=${pageParam}`, options)
    return responce.data
}