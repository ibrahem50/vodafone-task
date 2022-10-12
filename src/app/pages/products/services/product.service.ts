import { BehaviorSubject, Observable } from 'rxjs';
import { ProductExportModel, ProductModel } from '../product.model';

import { ApiService } from 'src/app/core/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: BehaviorSubject<ProductModel[]> = new BehaviorSubject<
    ProductModel[]
  >([]);

  constructor(private apiService: ApiService) {}

  getProducts(): Observable<ProductModel[]> {
    return this.apiService.getRequest('products');
  }
  getCategories(): Observable<string[]> {
    return this.apiService.getRequest('products/categories');
  }
  getProductByCategory(category: string): Observable<ProductModel[]> {
    return this.apiService.getRequest(`products/category/${category}`);
  }
  addProduct(product: ProductExportModel): Observable<ProductModel> {
    return this.apiService.postRequest('products', product);
  }
  deleteProduct(id: number): Observable<ProductModel> {
    return this.apiService.deleteRequest(`products/${id}`);
  }
}
