import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _httpClient: HttpClient) { }

  getOne(userId: number): Observable<User> {
    const url = `/users/${userId}`;
    return this._httpClient.get<User>(url);
  }

  getAll(): Observable<User[]> {
    return this._httpClient.get<User[]>('/users');
  }
}
