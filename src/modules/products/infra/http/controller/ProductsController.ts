import { Request, Response } from 'express';

// import { container } from 'tsyringe';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'Hello world' });
  }
}
