import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { FilterForm } from '../models/FilterForm';
import { LoginForm } from '../models/LoginForm';
import { SignUpForm } from '../models/SignUpForm';
import { ApiResponse} from '../models/ApiResponse';
import { Product } from '../models/Product';
import { CartBody } from '../models/CartBodyPost';
import { CartResponse } from '../models/CartResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'http://127.0.0.1:3000';
  private token = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  token$ = this.token.asObservable();
  constructor(private _http: HttpClient) { }

  //token updating
  addToken(token: string) {
    this.token.next(token);
  }

  getToken() {
    return this.token.value;
  }


  //cart
  getCart(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.value}`
    });
    return this._http.get<CartResponse[]>(this.apiURL + '/cart', {headers}).pipe(
      map(response => {
        return response.map( (item) => ({
          ...item.product,
          quantity: item.quantity
        })
        )
      })
    );
  }

  // postCart(cart: Product[]){
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.token.value}`
  //   });
  //   console.log("ahlan");
  //   return this._http.put(this.apiURL + '/cart', cart, {headers});
  // }

  postCart(products: CartBody[]){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.value}`
    });
    return this._http.put(this.apiURL + '/cart', products, {headers});
  }


  getData(): Observable<any> {
    return this._http.get(this.apiURL + '/products');
  }

  removeProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.value}`
    })
    return this._http.request('delete', this.apiURL + '/products/dashboard', {headers, body: product});
  }

  updateProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.value}`
    })
    return this._http.put(this.apiURL + '/products/dashboard', product, {headers})
  }

  addProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.value}`
    })
    return this._http.post(this.apiURL + '/products/dashboard', product, {headers} );
  }

  applyFilters(form: FilterForm): Observable<any> {
    return this._http.post(this.apiURL + '/products/filters', form);
  }

  login(form :LoginForm): Observable<any> {
    return this._http.post<any>(this.apiURL + `/login`, form).pipe(
      tap(response => {
        if (response) {
          localStorage.setItem('token', response);
          this.token.next(response);
        }
      })
    )
  }

  signup(form: SignUpForm): Observable<any> {
    return this._http.post<any>(this.apiURL + `/signup`, form).pipe(
      tap(response => {
        localStorage.setItem('token', response);
        this.token.next(response);
      })
    )
  }
}
