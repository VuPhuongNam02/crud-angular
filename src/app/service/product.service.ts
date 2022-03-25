import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
const url = "http://localhost:3000/products"

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(url)
  }

  getProductById(id: number | string): Observable<any> {
    return this.http.get(`${url}/${id}`)
  }

  addProduct(data: object): Observable<any> {
    return this.http.post(`${url}`, data)
  }

  updateProduct(id: number | string, data: object): Observable<any> {
    return this.http.put(`${url}/${id}`, data)
  }

  deleteProduct(id: number | string): Observable<any> {
    return this.http.delete(`${url}/${id}`)
  }

}
