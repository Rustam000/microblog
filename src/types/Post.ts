// types/Post.ts
export interface Comment {
    content: string;
    createdAt: Date;
  }
  
  export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date; 
    likes: number; 
    comments: Comment[];
  }
  