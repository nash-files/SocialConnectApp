export interface Post {
  id: string;
  userId: string;
  content: string;
  mediaUrl?: string;
  type: 'text' | 'image' | 'video';
  timestamp: Date;
  likes: number;
  comments: number;
}