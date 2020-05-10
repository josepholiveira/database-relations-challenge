import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import Orders from '../entities/Orders';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Orders>;

  constructor() {
    this.ormRepository = getRepository(Orders);
  }
}

export default OrdersRepository;
