import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
export interface Product {
  sku: string;
  name: string;
  price: number;
  stock: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    const products = [
      { sku: 'HW-001', name: 'Laptop Pro 15"', price: 1299.99, stock: 45 },
      { sku: 'HW-002', name: 'Wireless Mouse', price: 25.5, stock: 250 },
      { sku: 'SW-001', name: 'OS License', price: 199.0, stock: 1500 },
      { sku: 'AC-005', name: 'USB-C Hub', price: 49.99, stock: 120 },
    ];
    return of(products).pipe(delay(300));
  }
}
