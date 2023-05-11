import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

login(email: string, password: string) {
  const url = `${this.apiUrl}/login`;
  const body = { email, password };
  return this.http.post(url, body);
}
getUser(userId: string) {
  const url = `${this.apiUrl}/users/${userId}`;
  return this.http.get(url);
}
}
