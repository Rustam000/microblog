// components/CreatePost.tsx
import React, { useState } from 'react';
import { Post as PostType } from '../types/Post';

interface CreatePostProps {
  onCreatePost: (post: PostType) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostType = {
      id: Date.now(), 
      title,
      content,
      createdAt: new Date(),
      likes: 0,
      comments: [],
    };
    onCreatePost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Содержимое"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Создать пост</button>
    </form>
  );
};

export default CreatePost;
