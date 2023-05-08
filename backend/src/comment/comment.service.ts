import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  getComments() {
    return this.prismaService.coment.findMany();
  }

  getCommentById(id: string) {
    return this.prismaService.coment.findUnique({ where: { id: id } });
  }

  createComment(payload: CreateCommentDto) {
    return this.prismaService.coment.create({
      data: {
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        coment: payload.coment,
      },
    });
  }

  deleteComment(id: string) {
    return this.prismaService.coment.delete({ where: { id: id } });
  }
}
