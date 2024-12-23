import { BaseService } from './base.service';
import { Post } from '../models/post.model';

export class PostService extends BaseService {
  async createPost(post: Omit<Post, 'id'>): Promise<string> {
    try {
      const docRef = await this.firestore
        .collection('posts')
        .add({
          ...post,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      return docRef.id;
    } catch (error) {
      this.handleError(error, 'PostService.createPost');
      throw error;
    }
  }

  async getPosts(): Promise<Post[]> {
    try {
      const snapshot = await this.firestore
        .collection('posts')
        .orderBy('timestamp', 'desc')
        .get();
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Post));
    } catch (error) {
      this.handleError(error, 'PostService.getPosts');
      throw error;
    }
  }
}