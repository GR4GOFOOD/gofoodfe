import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestUsersService {

  private backendUrl = 'http://localhost:3000/users'; // Đặt đúng URL backend của bạn ở đây

  constructor(private http: HttpClient) { }

  signup(username: string, email: string, password: string) {
    return this.http.post(this.backendUrl, { username, email, password });
  }
}
