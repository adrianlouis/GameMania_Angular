import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Multiplayer } from '../models/multiplayer';

@Injectable({
  providedIn: 'root'
})
export class MultiplayerService {

  url = "http://localhost:3000/multiplayer"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  //Insere uma linha na tabela com os dados fornecidos nos inputs
  criar(criar: Multiplayer): Observable<Multiplayer>{
    return this.http.post<Multiplayer>(this.url, JSON.stringify(criar), this.httpOptions)
  }


  //Lista na tabela todos os eventos marcados que foram criados
  read(): Observable<Multiplayer[]>{
    return this.http.get<Multiplayer[]>(this.url)
  }

  // readById(id: string): Observable<Multiplayer[]> {
  //   return this.http.get<Multiplayer[]>(`${this.url}/${id}`);
  // }

  //Usado no Filtro por Plataforma
  readByPlat(plataforma: string): Observable<Multiplayer[]>{
    return this.http.get<Multiplayer[]>(`${this.url}/?plataforma=${plataforma}`)
  }
  
  //Usado para editar itens da tabela
  update(id: string, user: Multiplayer):Observable<Multiplayer>{
    return this.http.put<Multiplayer>(`${this.url}/${id}`, user, this.httpOptions)
  }

  updateForm(id: string, user: Multiplayer): Observable<Multiplayer>{
    return this.http.put<Multiplayer>(`${this.url}/${id}`, user)
  }

  deletarUser(id: string):Observable<Multiplayer>{
    return this.http.delete<Multiplayer>(`${this.url}/${id}`)
  }

}