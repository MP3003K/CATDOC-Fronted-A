import { Injectable } from '@angular/core';
import { LineaAcademica } from '../models/linea-academica';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { AuthService } from '../../login/login/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LineaAcademicaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient,  private router:Router, private authService: AuthService) { }
  
  private addAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }

  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }

  getLineasAcademicas(): Observable<LineaAcademica[]>{
    return this.http.get<LineaAcademica[]>(this.url+'/lineas',{headers:this.addAuthorizationHeader()});
  }
  
  getLineaAcademica(id:number):Observable<Object>{
    return this.http.get(this.url+'/lineas/'+id,{headers:this.addAuthorizationHeader()});
  }

  addLineaAcademica(linea: LineaAcademica): Observable<number>{
    return this.http.post<number>(this.url+'/lineas/add', linea, {headers:this.addAuthorizationHeader()});
  }
  
  deleteLineaAcademica(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/lineas/delete/"+id,{headers:this.addAuthorizationHeader()});
  }
  updateLineaAcademica(linea: LineaAcademica, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/lineas/update/"+id, linea,{headers:this.addAuthorizationHeader()});
  }

}
