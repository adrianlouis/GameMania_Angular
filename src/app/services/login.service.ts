import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loged: any = ""
  logado: number = 0;

  url = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  }

  login(user: Login): Observable<any>{
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
    })
  }

  criarUser(cadastro: Login): Observable<Login>{
    return this.httpClient.post<Login>(this.url, cadastro)
  }



}
