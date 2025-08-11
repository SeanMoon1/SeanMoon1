import { Controller, Param, Body, Delete, Get, Post, Put } from "@nestjs/common";
import { BlogService } from "./blog.service";
import type { PostDto } from "./blog.model";

@Controller('blog')
export class BlogController{
    constructor(private blogService: BlogService) {}

    @Get()
    async getAllPosts(): Promise<PostDto[]> {
        console.log('모든 게시글 가져오기');
        return await this.blogService.getAllPosts();
    }
    
    @Post()
    async createPost(@Body() postDto: PostDto): Promise<string> {
        console.log('게시글 작성');
        await this.blogService.createPost(postDto);
        return 'success';
    }
    
    @Get(':id')
    async getPost(@Param('id') id: string): Promise<PostDto | undefined> {
        console.log(`[id: ${id}]게시글 하나 가져오기`);
        return await this.blogService.getPost(id);
    }
    
    @Delete(':id')
    async deletePost(@Param('id') id: string): Promise<string> {
        console.log('게시글 삭제');
        await this.blogService.delete(id);
        return 'success';
    }
    
    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() postDto) {
        console.log('게시글 업데이트', id, postDto);
        this.blogService.updatePost(id, postDto);
    }
}