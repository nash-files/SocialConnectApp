import { Observable } from '@nativescript/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

export class FeedViewModel extends Observable {
  private _posts: Array<Post> = [];
  private postService: PostService;

  constructor() {
    super();
    this.postService = new PostService();
  }

  get posts(): Array<Post> {
    return this._posts;
  }

  async loadPosts() {
    try {
      this._posts = await this.postService.getPosts();
      this.notifyPropertyChange('posts', this._posts);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }

  async onNewPost() {
    // Navigate to new post page
  }
}