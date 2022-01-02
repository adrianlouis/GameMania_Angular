import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  showMessage(){
  }

  criarUser(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.url, cadastro)
  }
}
