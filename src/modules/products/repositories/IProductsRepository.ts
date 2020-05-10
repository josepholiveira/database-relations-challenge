import Product from '../infra/typeorm/entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | undefined>;
}
