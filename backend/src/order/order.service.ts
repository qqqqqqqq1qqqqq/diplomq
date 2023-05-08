import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  getOrders() {
    return this.prismaService.order.findMany();
  }

  getOrderById(id: string) {
    return this.prismaService.order.findUnique({ where: { id: id } });
  }

  createOrder(payload: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        name: payload.name,
        surname: payload.surname,
        phoneNumber: payload.phoneNumber,
        service: payload.service,
        price: payload.price,
        status: payload.status,
        date: payload.date
      },
    });
  }

  updateOrder(id: string, payload: UpdateOrderDto) {
    return this.prismaService.order.update({
      where: { id: id },
      data: { status: payload.status},
    });
  }

  deleteOrder(id: string) {
    return this.prismaService.order.delete({ where: { id: id } });
  }
}
