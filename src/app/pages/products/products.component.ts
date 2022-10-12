import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]> = new Observable();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$;
  }

  track(index: number, item: ProductModel) {
    return item.id;
  }
}
