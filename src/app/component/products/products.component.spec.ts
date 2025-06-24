import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockProductService: Partial<ProductService>;

  beforeEach(async () => {
    mockProductService = {
      getProducts: jest
        .fn()
        .mockReturnValue(
          of([{ sku: 'HW-001', name: 'Laptop', price: 1000, stock: 5 }])
        ),
    };
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.products.length).toBe(1);
      expect(component.products[0].sku).toBe('HW-001');
    });
  }));
});
