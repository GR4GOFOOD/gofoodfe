import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  private apiUrl = 'http://localhost:3000/api';
<<<<<<< HEAD

=======
>>>>>>> 9989b928f8e0f596048f04ad4409db14ab788cc0

  get(url: String): Observable<any> {
    return from(axios.get(this.apiUrl + url));
  }


  detail(url: String, id: Number): Observable<any> {
    return from(axios.get(this.apiUrl + url + '/' + id));
  }
<<<<<<< HEAD

=======
>>>>>>> 9989b928f8e0f596048f04ad4409db14ab788cc0
  login(email: String, password:String): Observable<any> {
    return from(axios.post('http://localhost:3000/login', {
      Email: email,
      Password: password
    }));
  }
}
<<<<<<< HEAD
=======


>>>>>>> 9989b928f8e0f596048f04ad4409db14ab788cc0



