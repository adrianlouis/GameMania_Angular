import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalhes } from '../models/detalhes';


@Injectable({
  providedIn: 'root',
})

export class DetalhesService {

  constructor(private httpClient: HttpClient ) { }

  url = "http://localhost:3000/detailGames";

  urlCep = "http://viacep.com.br/ws/"

  httpOptions = {
    headers: new HttpHeaders ({ 'Content-type': 'application/json'})
  }


  getDetailGames(): Observable<Detalhes>{
    return this.httpClient.get<Detalhes>(this.url)
  }

  buscar(cep:string){
    return this.httpClient.get(`${this.urlCep}${cep}/json/`)
  }
}
