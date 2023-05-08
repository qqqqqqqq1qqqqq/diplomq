import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getComments(): Promise<import(".prisma/client").Coment[]>;
    createComment(payload: CreateCommentDto): import(".prisma/client").Prisma.Prisma__ComentClient<import(".prisma/client").Coment, never>;
    deleteComment(id: string): Promise<import(".prisma/client").Coment>;
}
