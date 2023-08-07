import PostItem from "./PostItem";
import useFetch from "./useFetch"; // Import the custom hook

const PostsSection = () => {
    console.log("after post");
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:8001/posts");

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="posts-section">
      {isPending ? (
        <div>Loading...</div>
      ) : (
        (posts?.length) ? (
        posts.map((post) => (
          <PostItem
            key={post.post_id}
            imageUrl={post.imageUrl}
            username={post.username}
            caption={post.caption}
          />
        ))
        ) : (
          <div>No Posts found</div>
        )
      )}

    </div>
  );
};

export default PostsSection;