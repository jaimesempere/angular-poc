import { InjectionToken } from '@angular/core';
import {IProductService} from "./i-product-service";

export const BRAND_TOKEN = new InjectionToken<string>('BRAND_TOKEN');
export const PRODUCT_SERVICE_TOKEN = new InjectionToken<IProductService>('PRODUCT_SERVICE_TOKEN');
