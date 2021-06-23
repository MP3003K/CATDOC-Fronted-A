import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { CompetenciaCurso } from '../models/competencia-curso';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaCursoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }

  getCompetenciaCursos(id:number): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/cmpcursos/dinamic/'+id);
  }

  addCompetenciaCurso(compc: CompetenciaCurso):Observable<number>{
    return this.http.post<number>(this.url+'/cmpcursos/add', compc,{headers:this.httpHeaders})
  }
  deleteCompetenciaCurso(id:number):Observable<number>{
    return this.http.delete<number>(this.url+'/cmpcursos/delete/'+id,{headers:this.httpHeaders} );
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
    return this.http.get<Object[]>('http://localhost:9090/competencias/allxplanl/'+id);
  }
  getCompetenciaNivelesDin(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/cmpniveles/only/'+id);
  }

  getCursosxPlan(id:number):Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/curso_plan/xplan/'+id);
  }
}

