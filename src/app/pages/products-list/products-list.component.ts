import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = signal<Product[]>([
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price": 109.95,
      "stock": 120
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL1500_.jpg",
      "price": 22.3,
      "stock": 250
    },
    {
      "id": 3,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "price": 695,
      "stock": 0
    },
    {
      "id": 4,
      "title": "Solid Gold Petite Micropave Ring",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "price": 168,
      "stock": 80
    },
    {
      "id": 5,
      "title": "White Gold Plated Princess",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "price": 9.99,
      "stock": 200
    }

  ])

}
