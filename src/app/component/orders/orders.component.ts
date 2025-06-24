import { Component, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  gridApi!: GridApi;

  columnDefs = [
    { field: 'orderId', headerName: 'Order ID', width: 120 },
    { field: 'customer', headerName: 'Customer' },
    {
      field: 'total',
      headerName: 'Order Total',
      valueFormatter: this.currencyFormatter,
    },
    { field: 'status', headerName: 'Status' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
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
