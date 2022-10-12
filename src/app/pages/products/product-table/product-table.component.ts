import { Component, Input, OnInit } from '@angular/core';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input('products') products: ProductModel[] = [];
  displayedColumns: string[] = [
    'id',
    'image',
    'title',
    'category',
    'price',
    'actions',
  ];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  edit(product: ProductModel) {
    console.log(product);
  }

  delete(product: ProductModel) {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.productService.deleteProduct(product.id).subscribe((res) => {
            this.products = this.products.filter(
              (product) => product.id != res.id
            );
            this.productService.products$.next(this.products);
          });
        }
      });
  }
}
