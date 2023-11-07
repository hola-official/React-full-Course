import {Post} from "./index"

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </>
    )
}

export default Feed
