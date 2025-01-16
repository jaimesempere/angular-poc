import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeStrategyComponent } from './home-strategy.component';
import {AppConfigService} from "../../app-config.service";
import {FantaProductService} from "./strategy/fanta-product.service";
import {CocaColaProductService} from "./strategy/coca-cola-product.service";
import {productServiceFactory} from "./strategy/product-service.factory";
import {PRODUCT_SERVICE_TOKEN} from "./strategy/brand.token";


@NgModule({
  declarations: [
    HomeStrategyComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    // AppConfigService,          // si no lo tienes con providedIn: 'root'
    FantaProductService,       // para que Angular sepa crearlos
    CocaColaProductService,
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useFactory: productServiceFactory,
      deps: [Injector, AppConfigService]
    }
  ]
})
export class HomeStrategyModule { }
