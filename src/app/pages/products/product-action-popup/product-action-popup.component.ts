import { ProductModel } from 'src/app/pages/products/product.model';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-action-popup',
  templateUrl: './product-action-popup.component.html',
  styleUrls: ['./product-action-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductActionPopupComponent implements OnInit {
  categories$: Observable<string[]> = new Observable();
  productForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  constructor(
    private productService: ProductService,
    public dialogref: MatDialogRef<ProductActionPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      product: ProductModel;
      products: ProductModel[];
      edit: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    if (this.data.edit) {
      this.productForm.patchValue({
        title: this.data.product.title,
        description: this.data.product.description,
        image: this.data.product.image,
        category: this.data.product.category,
        price: this.data.product.price,
      });
    }
  }

  submit() {
    this.productForm.markAllAsTouched();
    if (this.productForm.valid) {
      if (!this.data.edit) {
        this.productService
          .addProduct(this.productForm.value)
          .subscribe((res) => {
            this.data.products.push(res);
            this.dialogref.close(this.data.products);
          });
      } else {
        this.productService
          .updateProduct(this.data.product.id, this.productForm.value)
          .subscribe((res) => {
            const index = this.data.products.findIndex((product) => {
              return product.id === res.id;
            });
            this.data.products[index] = res;
            this.dialogref.close(this.data.products);
          });
      }
    }
  }
}
