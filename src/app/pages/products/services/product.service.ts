import { ApiService } from 'src/app/core/api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProducts(): Observable<ProductModel[]> {
    return this.apiService.getRequest('products');
  }
  getCategories(): Observable<string[]> {
    return this.apiService.getRequest('products/categories');
  }
}
