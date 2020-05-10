import Product from '@modules/products/infra/typeorm/entities/Product';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

export default interface ICreateOrderDTO {
  customer: Customer;
  products: Product[];
}
