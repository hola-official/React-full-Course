import axios from "axios";

export const api = () => {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
// Get all posts
export const getPostPage = async (pageParam = 1, options = {}) => {
    const responce = await api.get(`/posts?_page=${pageParam}`, options)
    return responce.data
}