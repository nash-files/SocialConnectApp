import { BaseService } from '../base.service';
import { Post } from '../../models/post.model';
import { PostRepository } from './post.repository';
import { PostValidator } from './post.validator';

export class PostService extends BaseService {
  private repository: PostRepository;
  private validator: PostValidator;

  constructor() {
    super();
    this.repository = new PostRepository();
    this.validator = new PostValidator();
  }

  async createPost(post: Omit<Post, 'id'>): Promise<string> {
    try {
      this.validator.validatePost(post);
      return await this.repository.create(post);
    } catch (error) {
      this.handleError(error, 'PostService.createPost');
      throw error;
    }
  }

  async getPosts(): Promise<Post[]> {
    try {
      return await this.repository.getAll();
    } catch (error) {
      this.handleError(error, 'PostService.getPosts');
      throw error;
    }
  }
}