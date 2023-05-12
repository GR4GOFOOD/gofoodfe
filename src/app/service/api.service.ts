import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
<<<<<<< HEAD
  private apiUrl = 'http://localhost:3000/api';
=======
  private apiUrl = 'http://localhost:56788/api';
<<<<<<< HEAD
>>>>>>> origin/dev_quynh

  get(url: String): Observable<any> {
    return from(axios.get(this.apiUrl + url));
  }

=======

  get(url: String): Observable<any> {
    return from(axios.get(this.apiUrl + url));
  }
>>>>>>> 14c4b53d8cd4ae175884cbf1e77e2f622f6ac05c

  detail(url: String, id: Number): Observable<any> {
    return from(axios.get(this.apiUrl + url + '/' + id));
  }
<<<<<<< HEAD

  login(email: String, password:String): Observable<any> {
    return from(axios.post('http://localhost:3000/login', {
      Email: email,
      Password: password
    }));
  }
}
=======
>>>>>>> origin/dev_quynh


}
<<<<<<< HEAD
=======

>>>>>>> 14c4b53d8cd4ae175884cbf1e77e2f622f6ac05c
