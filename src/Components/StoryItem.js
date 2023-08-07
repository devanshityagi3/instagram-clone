import "../css/storysection.css";

const StoryItem = ({ imageUrl, username }) => {
  return (
    <div className="story-item">
      <img src={imageUrl} alt={username} />
      <span>{username}</span>
    </div>
  );
};

export default StoryItem;
