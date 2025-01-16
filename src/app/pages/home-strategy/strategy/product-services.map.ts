import { Type } from '@angular/core';
import { IProductService } from './i-product-service';
import { FantaProductService } from './fanta-product.service';
import { CocaColaProductService } from './coca-cola-product.service';

export const PRODUCT_SERVICES_MAP: Record<string, Type<IProductService>> = {
  fanta: FantaProductService,
  cocacola: CocaColaProductService
};
