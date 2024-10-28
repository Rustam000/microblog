import React, { useState, useEffect, useRef } from 'react';
import Post from '../components/Post';
import CreatePost from '../components/CreatePost';
import { Post as PostType, Comment } from '../types/Post';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const isLoadedFromStorage = useRef(false); 

 
  const loadPosts = () => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts).map((post: PostType) => ({
        ...post,
        createdAt: new Date(post.createdAt), 
        comments: post.comments.map((comment: Comment) => ({
          ...comment,
          createdAt: new Date(comment.createdAt), 
        })),
      }));
      setPosts(parsedPosts);
    }
  };
  
  
  useEffect(() => {
    loadPosts();
  }, []);

 
  useEffect(() => {
    if (isLoadedFromStorage.current && posts.length > 0) {
      console.log("Сохраняем посты в localStorage:", posts);
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  
  const handleCreatePost = (newPost: PostType) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now() }]);
  };

  
  const handleAddComment = (postId: number, comment: Comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  
  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div>
      <h1>Микроблог</h1>
      <CreatePost onCreatePost={handleCreatePost} />
      {posts.length === 0 ? (
        <p>Нет постов. Добавьте свой первый пост!</p>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onAddComment={handleAddComment}
            onLike={handleLike}
          />
        ))
      )}
    </div>
  );
};

export default Home;
