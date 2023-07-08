export const PostCard = ({post}) => {

    return (
        <div className="post">
            <img src={post.cover.url} alt={post.cover.title} />
            <div className="post-content">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        </div>
    );
}

