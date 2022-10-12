import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ProductExportModel,
  ProductModel,
} from 'src/app/pages/products/product.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getRequest<T>(path: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${path}`, this.httpOption);
  }

  postRequest<T>(path: string, data: ProductExportModel): Observable<T> {
    return this.http.post<T>(
      `${environment.apiUrl}/${path}`,
      data,
      this.httpOption
    );
  }
  putRequest<T>(path: string, data: ProductExportModel): Observable<T> {
    return this.http.put<T>(
      `${environment.apiUrl}/${path}`,
      data,
      this.httpOption
    );
  }
  deleteRequest<T>(path: string): Observable<T> {
    return this.http.delete<T>(
      `${environment.apiUrl}/${path}`,
      this.httpOption
    );
  }
}
