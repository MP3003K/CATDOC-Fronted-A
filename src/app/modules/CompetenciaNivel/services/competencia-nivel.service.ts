import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { CompetenciaNivel } from '../models/competencia-nivel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompetenciaNivelService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient, private router:Router) { 
    
  }
  getCompetenciaNiveles(): Observable<CompetenciaNivel[]>{
    return this.http.get<CompetenciaNivel[]>(this.url+'/cmpniveles');
  }
  getCompetenciaNivel(id:number):Observable<Object>{
    return this.http.get(this.url+'/cmpniveles/'+id);
  }
  addCompetenciaNivel(compn: CompetenciaNivel):Observable<number>{
    return this.http.post<number>(this.url+'/cmpniveles/add', compn, {headers:this.httpHeaders});
  }
  deleteCompetenciaNivel(id:number): Observable<number>{
    return this.http.delete<number>(this.url+'/cmpniveles/delete/'+id,{headers:this.httpHeaders});
  }
  updateCompetenciaNivel(compn: CompetenciaNivel, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/cmpniveles/update/'+id, compn, {headers:this.httpHeaders});
  }

  getCompetenciaNivelesDin(id:number):Observable<CompetenciaNivel[]>{
    return this.http.get<CompetenciaNivel[]>(this.url+'/cmpniveles/only/'+id);
  }

  /* Selectors  and Others */

  getCampus(): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus');
  }
  getFacultad(nom:string):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus/'+nom);
  }
  getEscuela(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/escuela/'+id);
  }
  getPlanesAcademicosforSelector(id:number): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/planes/xunidad/selector/'+id);
  }
  getLineasxPlan(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/planlineas/lineas/'+id);
  }

  getCompetencias(id:number):Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/competencias/allxplanl/'+id);  /* */
  }
  
  getNiveles():Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/niveldelogro/all');
  }

}
