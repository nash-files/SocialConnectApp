import { Observable } from '@nativescript/core';
import { Post } from '../../../models/post.model';

export class PostItemViewModel extends Observable {
  private _post: Post;

  constructor(post: Post) {
    super();
    this._post = post;
  }

  get username(): string {
    return this._post.username;
  }

  get content(): string {
    return this._post.content;
  }

  get mediaUrl(): string | undefined {
    return this._post.mediaUrl;
  }

  get likes(): number {
    return this._post.likes;
  }

  get comments(): number {
    return this._post.comments;
  }

  onLike() {
    // Implement like functionality
  }

  onComment() {
    // Implement comment functionality
  }
}