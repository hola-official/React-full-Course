import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';
import { format } from 'date-fns';
import api from './api/posts'

const EditPost = () => {
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    const navigate = useNavigate()

    const handleEdit = async (id) => {
        const date = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, date, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(
                posts.map((post) => (post.id === id ? { ...response.data } : post))
            );
            setEditTitle("");
            setEditBody("");
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }

    }, [post, setEditTitle, setEditBody])
    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Edit Title</label>
                        <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} required />
                        <label htmlFor="postBody">Edit Body</label>
                        <textarea id="postBody" required value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }

            {!editTitle &&
                <>
                    <h2>Post Not Found!</h2>
                    <p>Well, That's disappointing</p>

                    <p>
                        <Link to='/'>Visit Our website</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost
