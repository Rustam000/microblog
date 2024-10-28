import React from 'react';
import { Comment } from '../types/Post';

const Comments: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <div className="comments">
      {comments.length === 0 ? (
        <p>Комментариев нет</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
            <small>{new Date(comment.createdAt).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
