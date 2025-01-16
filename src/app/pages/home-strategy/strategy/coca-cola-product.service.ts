import { Injectable } from '@angular/core';
import { IProductService } from './i-product-service';

@Injectable()
export class CocaColaProductService implements IProductService {
  getProducts() {
    return [
      {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'cocacola3.jpg'},
      {name: 'Botella de Cristal', size: '250ml', price: 1.50, image: 'cocacola3.jpg'},
      {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'cocacola3.jpg'},
      {name: 'Promoción Coca-Cola', size: '2x24', price: 15.00, image: 'cocacola3.jpg'},
    ];
  }
}
