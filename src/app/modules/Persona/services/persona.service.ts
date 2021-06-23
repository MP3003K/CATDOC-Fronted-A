import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }
  
  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+'/personas');
  }
  getPersona(id:number):Observable<Object>{
    return this.http.get(this.url+'/personas/'+id);
  }
  addPersona(persona: Persona): Observable<number>{
    return this.http.post<number>(this.url+'/personas/add', persona, {headers:this.httpHeaders});
  }
  
  deletePersona(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/personas/delete/"+id,{headers:this.httpHeaders});
  }
  updatePersona(persona: Persona, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/personas/update/"+id, persona, {headers:this.httpHeaders});
  }
}
