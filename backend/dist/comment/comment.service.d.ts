import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getComments(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Coment[]>;
    getCommentById(id: string): import(".prisma/client").Prisma.Prisma__ComentClient<import(".prisma/client").Coment, never>;
    createComment(payload: CreateCommentDto): import(".prisma/client").Prisma.Prisma__ComentClient<import(".prisma/client").Coment, never>;
    deleteComment(id: string): import(".prisma/client").Prisma.Prisma__ComentClient<import(".prisma/client").Coment, never>;
}
