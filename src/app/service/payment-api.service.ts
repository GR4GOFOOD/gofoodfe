import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Payment } from '../types/Payment';

@Injectable({
  providedIn: 'root'
})

export class PaymentAPIService {

  constructor(private _http: HttpClient) { }

  getPayments():Observable<any>
  {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")

  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }

  return this._http.get<any>("/payments",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<Payment>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }

  postPayment(aPayment:any):Observable<any>{

    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")

    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.post<any>("/payments",JSON.stringify(aPayment),requestOptions).pipe(
    map(res=>JSON.parse(res) as Payment),
    retry(3),
    catchError(this.handleError))
    }
}
