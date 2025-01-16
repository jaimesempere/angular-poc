import {Component, Inject, Injectable} from '@angular/core';
import {IProductService} from "./strategy/i-product-service";
import {PRODUCT_SERVICE_TOKEN} from "./strategy/brand.token";


@Component({
  selector: 'app-home',
  templateUrl: './home-strategy.component.html',
})
export class HomeStrategyComponent {
  products: any;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private productService: IProductService) {
     // @ts-ignore
     this.products = this.productService.getProducts();
  }


  addToCart(product: any) {
    console.log('Añadido al carrito:', product);
  }
}
