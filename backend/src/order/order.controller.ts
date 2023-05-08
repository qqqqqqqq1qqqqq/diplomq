import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { log } from 'console';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getOrders() {
    const orders = await this.orderService.getOrders();
    if (orders.length < 1) {
      throw new NotFoundException('Orders not found');
    }
    return orders;
  }

  @Post()
  createOrder(@Body() payload: CreateOrderDto) {
    return this.orderService.createOrder(payload);
  }

  @Patch(':id')
  async updateOrder(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
    const isOrder = await this.orderService.getOrderById(id);
    if (!isOrder) {
      throw new NotFoundException('Order does not exist');
    }
    return this.orderService.updateOrder(id, payload);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    const isOrder = await this.orderService.getOrderById(id);
    if (!isOrder) {
      throw new NotFoundException('Order does not exist');
    }
    return this.orderService.deleteOrder(id);
  }
}
