
import React, { useState } from 'react';
import { Comment } from '../../types/Post';
import "./style.scss"

interface AddCommentProps {
  onAddComment: (comment: Comment) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      content: commentContent,
      createdAt: new Date(),
    };
    onAddComment(newComment);
    setCommentContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Добавьте комментарий..."
        required
      />
      <button type="submit">Добавить комментарий</button>
    </form>
  );
};

export default AddComment;
