import { Injectable } from '@angular/core';
import { IProductService } from './i-product-service';

@Injectable()
export class FantaProductService implements IProductService {
  getProducts() {
    return [
      {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'fanta3.jpg'},
      {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'fanta3.jpg'},
      {name: 'Promoción Fanta', size: '2x24', price: 15.00, image: 'fanta3.jpg'},
    ];
  }
}
