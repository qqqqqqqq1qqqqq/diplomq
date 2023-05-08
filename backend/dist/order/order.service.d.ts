import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getOrders(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Order[]>;
    getOrderById(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    createOrder(payload: CreateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    updateOrder(id: string, payload: UpdateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    deleteOrder(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
}
