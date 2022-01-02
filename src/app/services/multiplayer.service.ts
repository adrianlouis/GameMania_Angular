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

  criar(criar: Multiplayer): Observable<Multiplayer>{
    return this.http.post<Multiplayer>(this.url, JSON.stringify(criar), this.httpOptions)
  }

  //getCars
  read(): Observable<Multiplayer[]>{
    return this.http.get<Multiplayer[]>(this.url)
  }

  //Obter item pelo ID
  readById(id: string): Observable<Multiplayer[]> {
    return this.http.get<Multiplayer[]>(`${this.url}/${id}`);
  }

  readByPlat(plataforma: string): Observable<Multiplayer[]>{
    return this.http.get<Multiplayer[]>(`${this.url}/?plataforma=${plataforma}`)
    // http://localhost:3000/multiplayer/?host=Adrian
  }

  // del(deletar: Multiplayer){
  //   return this.http.delete<Multiplayer>(this.url+'/'+deletar.id, this.httpOptions)
  // }

  update(id: string, user: Multiplayer):Observable<Multiplayer>{
    return this.http.put<Multiplayer>(`${this.url}/${id}`, user, this.httpOptions)
  }

  updateForm(id: string, user: Multiplayer): Observable<Multiplayer>{
    return this.http.put<Multiplayer>(`${this.url}/${id}`, user)
  }
  // update(id: string, user: Multiplayer):Observable<Multiplayer>{
  //   return this.http.put<Multiplayer>(`${this.url}/${id}`, user, this.httpOptions)
  // }

  deletarUser(id: string):Observable<Multiplayer>{
    return this.http.delete<Multiplayer>(`${this.url}/${id}`)
  }

}