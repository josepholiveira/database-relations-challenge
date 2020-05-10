import { getRepository, Repository } from 'typeorm';

import IOrdersToProductsRepository from '@modules/orders_products/repositories/IOrdersToProductsRepository';
import Products from '../entities/OrdersToProducts';

class OrdersToProductsRepository implements IOrdersToProductsRepository {
  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = getRepository(Products);
  }
}

export default OrdersToProductsRepository;
