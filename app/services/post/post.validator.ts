import { Post } from '../../models/post.model';

export class PostValidator {
  validatePost(post: Omit<Post, 'id'>) {
    if (!post.content && !post.mediaUrl) {
      throw new Error('Post must have either content or media');
    }

    if (post.content && post.content.length > 1000) {
      throw new Error('Post content cannot exceed 1000 characters');
    }

    if (post.type === 'video' && !post.mediaUrl) {
      throw new Error('Video posts must include media URL');
    }
  }
}