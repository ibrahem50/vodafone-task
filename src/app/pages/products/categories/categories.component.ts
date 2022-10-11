import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]> = new Observable();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
  }
}
