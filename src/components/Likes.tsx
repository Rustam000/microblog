import React, { useState } from 'react';

const Likes: React.FC<{ initialLikes: number }> = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>👍</button>
      <span>{likes} Likes</span>
    </div>
  );
};

export default Likes;
