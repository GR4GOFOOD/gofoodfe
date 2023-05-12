import { Injectable } from '@angular/core';
import {HttpClient,  HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map,Observable, retry, throwError } from 'rxjs';
import { Product } from '../types/Product';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: Product[] = [];

  constructor(private _http: HttpClient) { }

handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
}

// bài giỏ hàng
  getProducts(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain;charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    };
    return this._http.get<any>('/products', requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    );
  }

getProductid(id:string | null):Observable<any>{
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this._http.get<any>("/products/"+id,requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<Product>),
    retry(3),
    catchError(this.handleError)
  )
}



  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  removeCartItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  updateCartItem(item: any): void {
        const index = this.cartItems.findIndex((cartItem: any) => cartItem.ID === item.ID);
      if (index !== -1) {
      this.cartItems[index].productQty = item.productQty;
    }
  }

}


