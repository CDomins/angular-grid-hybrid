import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
export interface Order {
  orderId: number;
  customer: string;
  total: number;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  getOrders(): Observable<Order[]> {
    const orders: Order[] = [
      {
        orderId: 1001,
        customer: 'John Doe',
        total: 1349.98,
        status: 'Shipped',
      },
      {
        orderId: 1002,
        customer: 'Jane Smith',
        total: 49.99,
        status: 'Processing',
      },
      {
        orderId: 1003,
        customer: 'Peter Jones',
        total: 199.0,
        status: 'Delivered',
      },
      {
        orderId: 1004,
        customer: 'Mary Johnson',
        total: 25.5,
        status: 'Shipped',
      },
    ];
    return of(orders).pipe(delay(700));
  }
}
