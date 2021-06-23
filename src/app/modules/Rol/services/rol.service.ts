import { Injectable } from '@angular/core';
import { Rol } from '../models/rol';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.url+'/roles');
  }

  getRol(id:number):Observable<Rol[]>{
    return this.http.get<Rol[]>(this.url+'/roles/'+id);
  }

  addRol(rol:Rol):Observable<number>{
    return this.http.post<number>(this.url+'/roles/add', rol,{headers:this.httpHeaders});
  }

  deleteRol(id:number):Observable<number>{
    return this.http.delete<number>(this.url+'/roles/delete/'+id, {headers:this.httpHeaders});
  }

  updateRol(rol: Rol, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/roles/update/'+id, rol, {headers:this.httpHeaders});
  }
}
