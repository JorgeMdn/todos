import { Injectable } from '@angular/core';
import { ProductsInterface } from '../data/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  list = [
    {
      id: 0,
      title: 'Tenis',
      description: 'Tenis Nike talla 6',
      price: 0,
      amount: 10,
    },
  ];
  constructor() {}

  add = (product: ProductsInterface, i: number) => {
    this.list[i].amount++;
  };
  remove = (product: ProductsInterface, i: number) => {
    if (this.list[i].amount != 0) {
      this.list[i].amount--;
    }
  };
}
