import Medusa from '@medusajs/medusa-js';

const client = new Medusa({ baseUrl: 'http://localhost:9000', maxRetries: 3 });

export class Api {
  static async getProducts() {
    return await client.products.list();
  }

  static async getProduct(productId: string) {
    return await client.products.retrieve(productId);
  }
}
