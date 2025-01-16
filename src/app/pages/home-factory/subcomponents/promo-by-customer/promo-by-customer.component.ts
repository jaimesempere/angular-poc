import {Component} from '@angular/core';
import {AppConfigService} from "../../../../app-config.service";


@Component({
  selector: 'promo-by-customer',
  templateUrl: './promo-by-customer.component.html',
})
export class PromoByCustomerComponent {

  constructor(
    protected appConfigService: AppConfigService
  ) {
  }


}
