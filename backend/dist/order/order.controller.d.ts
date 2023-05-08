import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrders(): Promise<import(".prisma/client").Order[]>;
    createOrder(payload: CreateOrderDto): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order, never>;
    updateOrder(id: string, payload: UpdateOrderDto): Promise<import(".prisma/client").Order>;
    deleteOrder(id: string): Promise<import(".prisma/client").Order>;
}
