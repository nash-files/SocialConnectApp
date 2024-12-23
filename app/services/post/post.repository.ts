import { firebase } from '@nativescript/firebase-core';
import { Post } from '../../models/post.model';

export class PostRepository {
  private collection = firebase.firestore().collection('posts');

  async create(post: Omit<Post, 'id'>): Promise<string> {
    const docRef = await this.collection.add({
      ...post,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    return docRef.id;
  }

  async getAll(): Promise<Post[]> {
    const snapshot = await this.collection
      .orderBy('timestamp', 'desc')
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Post));
  }
}