import PostItem from "./PostItem";
import "../css/story-and-post-section.css";
import "../css/home.css";
import useFetch from "./useFetch"; // Import the custom hook

const PostsSection = () => {
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
      <div className="flex justify-between items-center w-full py-4">
        {isPending ? (
          <div>Loading...</div>
        ) : posts?.length ? (
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
        )}
      </div>
    </div>
  );
};

export default PostsSection;