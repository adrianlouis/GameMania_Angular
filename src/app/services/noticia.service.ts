import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  // Variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/noticias";

  //Insere a dependência HttpClient
  constructor(private httpClient: HttpClient) { }

  //Variavel que armazena as configurações dos headers da requisição.
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //Metodo GET, que vai trazer as noticias da API
  getNoticias(): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(this.url)
  }

  //Pegar um item
  getByUnit(id: string): Observable<Noticia[]>{
    return this.httpClient.get<Noticia[]>(`${this.url}/${id}`);
  }

    // readById(id: string): Observable<Multiplayer[]> {
  //   return this.http.get<Multiplayer[]>(`${this.url}/${id}`);
  // }
}
