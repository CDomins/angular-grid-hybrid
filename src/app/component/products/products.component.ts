import { Component, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  gridApi!: GridApi;

  columnDefs = [
    { field: 'sku', headerName: 'SKU' },
    { field: 'name', headerName: 'Product Name' },
    {
      field: 'price',
      headerName: 'Price',
      valueFormatter: this.currencyFormatter,
    },
    { field: 'stock', headerName: 'In Stock' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      if (this.gridApi) this.gridApi.sizeColumnsToFit();
    });
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  currencyFormatter(params: any): string {
    return `$${params.value.toFixed(2)}`;
  }
}
