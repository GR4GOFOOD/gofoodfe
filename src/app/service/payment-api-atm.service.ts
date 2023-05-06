import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { PaymentATM } from '../types/Payment';

@Injectable({
  providedIn: 'root'
})

export class PaymentAPIATMService {

  constructor(private _http: HttpClient) { }

  getPaymentATMs():Observable<any>
  {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")

  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }

  return this._http.get<any>("/paymentATMs",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<PaymentATM>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }

  postPaymentATM(aPaymentATM:any):Observable<any>{

    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")

    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.post<any>("/paymentATMs",JSON.stringify(aPaymentATM),requestOptions).pipe(
    map(res=>JSON.parse(res) as PaymentATM),
    retry(3),
    catchError(this.handleError))
    }
}
