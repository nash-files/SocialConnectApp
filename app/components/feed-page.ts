import { EventData, Page } from '@nativescript/core';
import { PostService } from '../services/post.service';

const postService = new PostService();

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  const vm = new FeedViewModel();
  page.bindingContext = vm;
  vm.loadPosts();
}

class FeedViewModel extends Observable {
  private _posts: Array<any> = [];

  get posts(): Array<any> {
    return this._posts;
  }

  async loadPosts() {
    try {
      this._posts = await postService.getPosts();
      this.notifyPropertyChange('posts', this._posts);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }

  async onNewPost() {
    // Navigate to new post page
  }
}