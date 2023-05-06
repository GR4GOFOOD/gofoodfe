import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { retry } from 'rxjs/internal/operators/retry';
import { IContact } from 'src/app/types/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private _http:HttpClient) { }

  postContact(aContact:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/supports=contacts",JSON.stringify(aContact),requestOptions).pipe(
      map(res=>JSON.parse(res) as IContact),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
