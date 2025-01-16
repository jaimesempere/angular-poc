import { Component } from '@angular/core';
import {AppConfigService} from "../../app-config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products;

  constructor(appConfigService: AppConfigService) {
    console.log('im home component')
    if (appConfigService.isFanta()) {
      this.products = [
        {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'fanta1.jpg'},
        {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'fanta1.jpg'},
        {name: 'Promoción Fanta', size: '2x24', price: 15.00, image: 'fanta1.jpg'},
      ]
    }
    if (appConfigService.isCocaCola()) {
      this.products = [
        {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'cocacola1.jpg'},
        {name: 'Botella de Cristal', size: '250ml', price: 1.50, image: 'cocacola1.jpg'},
        {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'cocacola1.jpg'},
        {name: 'Promoción Coca-Cola', size: '2x24', price: 15.00, image: 'cocacola1.jpg'},
      ]
    }
    console.log('products', this.products)
  }

  addToCart(product: any) {
    console.log('Añadido al carrito:', product);
  }
}
