import { useContext, useState } from "react"
import DataContext from "./context/DataContext"
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from './api/posts'

const NewPost = () => {

  const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate()

  const {posts, setPosts} = useContext(DataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, date, body: postBody };
    try {
        const response = await api.post("/posts", newPost);
        const allPost = [...posts, response.data];
        setPosts(allPost);
        setPostTitle("");
        setPostBody("");
        navigate("/");
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
};

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} required />
        <label htmlFor="postBody">Post Body</label>
        <textarea id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
