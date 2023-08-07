import React from "react";

const PostItem = ({ imageUrl, username, caption }) => {
  return (
    <div className="post-item">
      <img src={imageUrl} alt={username} />
      <span>{username}</span>
      <p>{caption}</p>
    </div>
  );
};

export default PostItem;
