import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditPost = ({ posts, handleEdit, editBody, editTitle, setEditBody, setEditTitle }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

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
