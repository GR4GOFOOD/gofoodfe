import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
<<<<<<< HEAD
<<<<<<< HEAD
  private apiUrl = 'http://localhost:3000/api';
=======
  private apiUrl = 'http://localhost:56788/api';
<<<<<<< HEAD
>>>>>>> origin/dev_quynh
=======
  private apiUrl = 'http://localhost:3000/api';
  // private apiUrl = 'http://localhost:56788/api';
>>>>>>> 9c7967b64d81b17703545d651f0b2f3ea841e65d

  get(url: String): Observable<any> {
    return from(axios.get(this.apiUrl + url));
  }


  // get(url: String): Observable<any> {
  //   return from(axios.get(this.apiUrl + url));
  // }

  detail(url: String, id: Number): Observable<any> {
    return from(axios.get(this.apiUrl + url + '/' + id));
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 9c7967b64d81b17703545d651f0b2f3ea841e65d

  login(email: String, password:String): Observable<any> {
    return from(axios.post('http://localhost:3000/login', {
      Email: email,
      Password: password
    }));
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/dev_quynh
=======
>>>>>>> 9c7967b64d81b17703545d651f0b2f3ea841e65d




