import { Injector, Type } from '@angular/core';
import { PRODUCT_SERVICES_MAP } from './product-services.map';
import { IProductService } from './i-product-service';
import {AppConfigService} from "../../../app-config.service";

export function productServiceFactory(
  injector: Injector,
  appConfigService: AppConfigService
): IProductService {
  console.log(1);
  const brandName = appConfigService.getBrandName();
  console.log(2);
  const ServiceClass: Type<IProductService> = PRODUCT_SERVICES_MAP[brandName];
  console.log(3);

  if (!ServiceClass) {
    throw new Error(`No hay servicio configurado para la marca: '${brandName}'`);
  }

  return injector.get(ServiceClass);
}
