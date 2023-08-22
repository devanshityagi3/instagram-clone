import StoryItem from "./StoryItem";
import { useRef, useState } from "react";
import "../css/story-and-post-section.css";
import "../css/home.css";
import { FaSpinner } from "react-icons/fa";
import useFetch from "./useFetch"; // Import the custom hook
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const StorySection = () => {

  const storyContainerRef = useRef(null);
  const [activeStartIndex, setActiveStartIndex] = useState(0);

  const {
    data,
    isPending,
    error,
  } = useFetch("http://localhost:8000/stories");
  if (error) {
    return <div>Error: {error}</div>
  } else {
    console.log("data loaded", data, isPending, error);
  }

  const scrollLeft = () => {
    if (activeStartIndex > 0) {
      setActiveStartIndex(activeStartIndex - 1);
    }
  };

  const scrollRight = () => {
    if (storyContainerRef.current) {
      if (activeStartIndex < data.length - 1) {
      setActiveStartIndex(activeStartIndex + 1);
      }
    }
  };

  return (
    <div className="story-section">
      <div className="story-navigation">
        <button className="nav-button" onClick={scrollLeft}>
          <FiChevronLeft />
        </button>
        <div className="story-container" ref={storyContainerRef}>
          {isPending ? (
            <div>
              <FaSpinner className="spinner-icon" />
            </div>
          ) : data?.length !== 0 ? (
            data
              .slice(activeStartIndex, activeStartIndex + 6)
              .map((story) => (
                <StoryItem
                  key={story.story_id}
                  imageUrl={story.imageUrl}
                  username={story.username}
                />
              ))
          ) : (
            <div>
              <FaSpinner className="spinner-icon" />
            </div>
          )}
        </div>
        <button className="nav-button" onClick={scrollRight}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StorySection;
