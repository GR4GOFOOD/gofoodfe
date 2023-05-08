import { Injectable } from '@angular/core';
import {HttpClient,  HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map,Observable, retry, throwError } from 'rxjs';
import { Fashion } from './Fashion';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  //cách 1
  constructor(private _http: HttpClient) { }
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain;charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    };
    return this._http.get<any>('/fashions', requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }


getFashionid(id:string | null):Observable<any>{
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this._http.get<any>("/fashions/"+id,requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<Fashion>),
    retry(3),
    catchError(this.handleError)
  )
}

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  addToCart(fashion: Fashion): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<any>('http://localhost:3000/cart', fashion, { headers: headers, observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }
  public cartUrl: string = 'http://localhost:3000/cart';
  getCartUrl(): string {
    return this.cartUrl;
  }
  getCart(): Observable<any> {
    console.log('Cart URL:', this.cartUrl); // Hiển thị giá trị của this.cartUrl
    return this._http.get<any>(this.cartUrl).pipe(
      tap(() => console.log('GET request successful')), // Hiển thị thông báo khi yêu cầu GET thành công
      catchError((error) => {
        console.log('Error:', error); // Hiển thị thông tin chi tiết về lỗi
        return this.handleError(error);
      })
    );
  }

  getCartItem(id: string): Observable<any> {
    return this._http.get<any>('/cart/' + id).pipe(
      catchError(this.handleError)
    );
  }
  deleteCartItem(id: string): Observable<any> {
    return this._http.delete<any>('/cart/' + id).pipe(
      catchError(this.handleError)
    );
  }
  updateCartItem(product: Fashion): Observable<any> {
    return this._http.put<any>('/cart', product).pipe(
      catchError(this.handleError)
    );
  }

}

