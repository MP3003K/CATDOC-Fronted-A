import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanLinea } from '../models/plan-linea';

@Injectable({
  providedIn: 'root'
})
export class PlanLineaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http:HttpClient) { }

  getPlanesLineas(): Observable<PlanLinea[]>{
    return this.http.get<PlanLinea[]>(this.url+'/planlineas')
  }

  getPlanLinea(id:number):Observable<Object>{
    return this.http.get(this.url+'/planlineas/'+id);
  }

  addPlanLinea(planlinea: PlanLinea): Observable<number>{
    return this.http.post<number>(this.url+'/planlineas/add', planlinea, {headers:this.httpHeaders});
  }

  deletePlanLinea(id:number): Observable<number>{
    return this.http.delete<number>(this.url+'/planlineas/delete/'+id,{headers:this.httpHeaders});
  }
  updatePlanLinea(planlinea: PlanLinea, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/planlineas/update/'+id, planlinea,{headers:this.httpHeaders});
  }
  getLineasxPlan(id:number):Observable<PlanLinea[]>{
    return this.http.get<PlanLinea[]>(this.url+'/planlineas/lineas/'+id);
  }

  /*Otros servicios */
  getCampus(): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus');
  }
  getFacultad(nom:string):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus/'+nom);
  }
  getEscuela(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/escuela/'+id);
  }

  /*required for planlinea */
  getPlanesAcademicosforSelector(id:number): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/planes/xunidad/selector/'+id);
  }
  
  getLineasAcademicas(): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/lineas');
  }
}
