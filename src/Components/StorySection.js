import StoryItem from "./StoryItem";
import useFetch from "./useFetch"; // Import the custom hook

const StorySection = () => {
  const {
    data,
    isPending,
    error,
  } = useFetch("http://localhost:8000/stories");
  if (error) {
    return <div>Error: {error}</div>;
  } else {
    console.log("data loaded", data, isPending, error);
  }

  return (
    <div className="story-section">
      {isPending ? (
        <div>Loading...</div>
      ) : data?.length !== 0 ? (
        data?.map((story) => (
          <StoryItem
            key={story.story_id}
            imageUrl={story.imageUrl}
            username={story.username}
          />
        ))
      ) : (
        <div>No Stories </div>
      )}
    </div>
  );
};

export default StorySection;
