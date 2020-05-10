import { getRepository, Repository } from 'typeorm';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Customers from '../entities/Customers';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customers>;

  constructor() {
    this.ormRepository = getRepository(Customers);
  }
}

export default CustomersRepository;
