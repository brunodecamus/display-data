import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {






  constructor(private http: HttpClient) { }


  test() {
    return "coucou"
  }


  getConfig() {
    return this.http.get<any>('https://randomuser.me/api/?results=10');
  }

  getPosts(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=10');
  }
}
