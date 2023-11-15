// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { BsTrash3 } from "react-icons/bs"
import { useContext } from "react"
import DataContext from "./context/DataContext"
import api from './api/posts'

const PostPage = () => {

    const { posts, setPosts } = useContext(DataContext)
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postLists = posts.filter((post) => post.id !== id);
            setPosts(postLists);
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };
    
    const { id } = useParams()
    const post = posts.find(post => post.id.toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {post && <>
                    <h2 className="postTitle">{post.title}</h2>
                    <p className="postDate">{post.date}</p>
                    <p className="postBody">{post.body}</p>
                    <Link to={`/edit/${post.id}`}>
                        <HiOutlinePencilSquare role="button" tabIndex="0" className="editButton" />
                    </Link>
                    <BsTrash3 className="deleteButton" onClick={() => handleDelete(post.id)} role="button" tabIndex="0" />
                </>}
            </article>
        </main>
    )
}
export default PostPage
