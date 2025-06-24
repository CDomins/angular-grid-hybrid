import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { OrderService } from 'src/app/services/order.service';
import { of } from 'rxjs';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let mockOrderService: Partial<OrderService>;

  beforeEach(async () => {
    mockOrderService = {
      getOrders: jest.fn().mockReturnValue(
        of([
          {
            orderId: 1001,
            customer: 'John Doe',
            total: 200,
            status: 'Shipped',
          },
        ])
      ),
    };

    await TestBed.configureTestingModule({
      declarations: [OrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load orders on init', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.orders.length).toBe(1);
      expect(component.orders[0].orderId).toBe(1001);
    });
  }));
});
