import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeFactoryComponent } from './home-factory.component';
import {ProductService} from "./factory/product.service";
import {PromoByCustomerComponent} from "./subcomponents/promo-by-customer/promo-by-customer.component";


@NgModule({
  declarations: [
    HomeFactoryComponent,
    PromoByCustomerComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductService
  ]
})
export class HomeFactoryModule { }
