// import { Injectable } from '@angular/core';
// import { Observable, from } from 'rxjs';
// import axios from 'axios';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   constructor() { }
//   private apiUrl = 'http://localhost:56788/api';

//   get(url: String): Observable<any> {
//     return from(axios.get(this.apiUrl + url));
//   }

<<<<<<< HEAD:src/app/api.service.ts
//   detail(url: String, id: Number): Observable<any> {
//     return from(axios.get(this.apiUrl + url + '/' + id));
//   }
// }
=======
  detail(url: String, id: Number): Observable<any> {
    return from(axios.get(this.apiUrl + url + '/' + id));
  }
}
>>>>>>> 54a582df71fbbdcccb48c425af4639452e7a7873:src/app/service/api.service.ts
