import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input('products') products: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'image', 'title', 'category', 'price'];

  constructor() {}

  ngOnInit(): void {}
}
