import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';

export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const customer = await createOrder.execute({
      customer_id,
      products,
    });

    return response.json(customer);
  }
}
