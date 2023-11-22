const Post = React.forwardRef(() => {
    const postBody = (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </>
    )

    const content = ref ? (
        <article ref={ref}>{postBody}</article>
    ) : (
        <article>{postBody}</article>
    );
    return content

})

export default Post