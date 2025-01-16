import {Component, Injectable} from '@angular/core';
import {ProductService} from "./factory/product.service";
import {AppConfigService} from "../../app-config.service";


@Component({
  selector: 'app-home',
  templateUrl: './home-factory.component.html',
})
export class HomeFactoryComponent {
  products: any = [];

  constructor(
    private productService: ProductService,
    protected appConfigService: AppConfigService
  ) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    console.log('Añadido al carrito:', product);
  }

}
