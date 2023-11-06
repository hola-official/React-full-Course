const NewPost = ({ postTitle, postBody, setPostTitle, setPostBody, handleSumit }) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSumit}>
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
