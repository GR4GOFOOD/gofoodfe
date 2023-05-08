import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Users } from '../types/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) { }

  postSignup(aUser:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.post<any>("/users",JSON.stringify(aUser),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Users>),
      retry(3),
      catchError(this.handleError))
      }
      handleError(error:HttpErrorResponse){
      return throwError(()=>new Error(error.message))
    }

}
