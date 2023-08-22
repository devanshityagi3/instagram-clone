import { useState } from "react";
import SmileyDropdown from "./SmileyDropdown";
import "../css/story-and-post-section.css";
import { FaHeart, FaComment, FaShare, FaTrash } from "react-icons/fa";

const PostItem = ({ imageUrl, username, caption }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleShare = () => {
    // Implement the share functionality here
    // This could involve opening a share dialog or copying the post link, etc.
  };

  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <div className="post-item">
      <div className="user-info">
        <img src={`/images/users/${username}.png`} alt={username} />
        <span>{username}</span>
      </div>
      <img src={imageUrl} alt={username} />
      <div className="post-actions">
        <div className="action" onClick={handleLike}>
          <FaHeart className={isLiked ? "liked" : ""} />
          {likeCount} Likes
        </div>
        <div className="action">
          <FaComment />
          {comments.length} Comments
        </div>
        <div className="action" onClick={handleShare}>
          <FaShare />
          Share
        </div>
      </div>
      <p>
        <div className="username">{username}</div> {caption}
      </p>
      <div className="comments-section">
        {comments.length > 0 && (
          <div className="view-all-comments">
            View all {comments.length} comments
          </div>
        )}
        {comments.map((c, index) => (
          <div className="comment" key={index}>
            <span className="comment-username">{username}</span>
            {c}
            <span
              className="delete-comment"
              onClick={() => handleDeleteComment(index)}
            >
              <FaTrash />
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleComment();
            }
          }}
        />
        <SmileyDropdown />
      </div>
    </div>
  );
};

export default PostItem;
