
import React from 'react';
import { Post as PostType, Comment } from '../types/Post';
import AddComment from './AddComment/AddComment';

interface PostProps {
  post: PostType;
  onAddComment: (postId: number, comment: Comment) => void;
  onLike: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ post, onAddComment, onLike }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>{post.createdAt.toLocaleDateString()}</small>
      <div>
        <button onClick={() => onLike(post.id)}>👍 {post.likes}</button>
      </div>
      <div>
        <h4>Комментарии:</h4>
        {post.comments.length === 0 ? (
          <p>Нет комментариев.</p>
        ) : (
          post.comments.map((comment, idx) => (
            <div key={idx}>
              <p>{comment.content}</p>
              <small>{comment.createdAt.toLocaleDateString()}</small>
            </div>
          ))
        )}
        <AddComment onAddComment={(comment) => onAddComment(post.id, comment)} />
      </div>
    </div>
  );
};

export default Post;
