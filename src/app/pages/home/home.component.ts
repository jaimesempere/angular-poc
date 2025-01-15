import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Coca-Cola eCommerce';
  products = [
    { name: 'Botella de Cristal', size: '250ml', price: 1.50 },
    { name: 'Botella de Plástico', size: '500ml', price: 2.00 },
    { name: 'Botella de Plástico', size: '2L', price: 3.50 }
  ];

  addToCart(product: any) {
    console.log('Añadido al carrito:', product);
    // Aquí podrías implementar lógica para añadir al carrito
  }

}
