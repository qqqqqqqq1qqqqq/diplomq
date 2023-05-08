import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [CommentModule, PrismaModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
