import {Injectable} from "@angular/core";
import {AppConfigService} from "../../../app-config.service";

@Injectable()
export class ProductService {

  constructor( private appConfigService: AppConfigService) { }

  getProducts() {
    if (this.appConfigService.isFanta()) {
      return [
        {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'fanta2.jpg'},
        {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'fanta2.jpg'},
        {name: 'Promoción Fanta', size: '2x24', price: 15.00, image: 'fanta2.jpg'},
      ]
    }
    if (this.appConfigService.isCocaCola()) {
      return [
        {name: 'Botella de Plástico', size: '2L', price: 3.50, image: 'cocacola2.jpg'},
        {name: 'Botella de Cristal', size: '250ml', price: 1.50, image: 'cocacola2.jpg'},
        {name: 'Botella de Plástico', size: '500ml', price: 2.00, image: 'cocacola2.jpg'},
        {name: 'Promoción Coca-Cola', size: '2x24', price: 15.00, image: 'cocacola2.jpg'},
      ]
    }
    return [];
  }
}
