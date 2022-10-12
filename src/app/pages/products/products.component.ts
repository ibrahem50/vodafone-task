import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';
import { ProductService } from './services/product.service';
import { UserService } from '../login/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]> = new Observable();
  user$: Observable<{ userName: string; userType: number }> = new Observable();
  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$;
    this.user$ = this.userService.user$;
  }

  track(index: number, item: ProductModel) {
    return item.id;
  }
}
