import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getComments() {
    const coments = await this.commentService.getComments();
    if (!coments) {
      throw new NotFoundException('Comments not found');
    }
    return coments;
  }

  @Post()
  createComment(@Body() payload: CreateCommentDto) {
    return this.commentService.createComment(payload);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    const comment = await this.commentService.getCommentById(id);
    if (!comment) {
      throw new NotFoundException('Comment does not exist');
    }
    return this.commentService.deleteComment(id);
  }
}
