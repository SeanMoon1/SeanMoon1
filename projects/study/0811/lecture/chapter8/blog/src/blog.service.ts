import { PostDto } from "./blog.model";
import { BlogMongoRepository } from "./blog.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BlogService {
    constructor(private blogRepository: BlogMongoRepository) {}

    async getAllPosts(): Promise<PostDto[]> {
        return await this.blogRepository.getAllPost();
    }

    async createPost(postDto: PostDto): Promise<void> {
        await this.blogRepository.createPost(postDto);
    }

    async getPost(id: string): Promise<PostDto | undefined> {
       return await this.blogRepository.getPost(id);
    }

    async delete(id: string) {
        this.blogRepository.deletePost(id);
    }

    async updatePost(id, postDto: PostDto) {
       this.blogRepository.updatePost(id, postDto);
    }
}