import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]> = new Observable();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    this.getAllCategories();
  }
  chooseCategory(category: string) {
    this.productService.getProductByCategory(category).subscribe((res) => {
      this.productService.products$.next(res);
    });
  }
  getAllCategories() {
    this.productService.getProducts().subscribe((res) => {
      this.productService.products$.next(res);
    });
  }
  track(index: number, item: string) {
    return item;
  }
}
