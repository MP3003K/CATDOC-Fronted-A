import { Injectable } from '@angular/core';
import { Modulo } from '../models/modulo';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }
  
  getModulos(): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.url+'/modulos');
  }
  getModulo(id:number):Observable<Object>{
    return this.http.get(this.url+'/modulos/'+id);
  }
  addModulo(modulo: Modulo): Observable<number>{
    return this.http.post<number>(this.url+'/modulos/add', modulo, {headers:this.httpHeaders});
  }
  
  deleteModulo(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/modulos/delete/"+id,{headers:this.httpHeaders});
  }
  updateModulo(modulo: Modulo, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/modulos/update/"+id, modulo, {headers:this.httpHeaders});
  }
}
