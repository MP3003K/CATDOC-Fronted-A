import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanAcademico } from '../models/plan-academico';

@Injectable({
  providedIn: 'root'
})
export class PlanAcademicoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }

  getPlanesAcademicos(): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>(this.url+'/planes');
  }
  getPlanAcademico(id:number):Observable<Object>{
    return this.http.get(this.url+'/planes/'+id);
  }
  addPlanAcademico(plan: PlanAcademico):Observable<number>{
    return this.http.post<number>(this.url+'/planes/add', plan, {headers:this.httpHeaders});
  }
  deletePlanAcademico(id:number):Observable<number>{
    return this.http.delete<number>(this.url+'/planes/delete/'+id, {headers:this.httpHeaders});
  }
  updatePlanAcademico(plan: PlanAcademico, id:number):Observable<number>{
    return this.http.put<number>(this.url+'/planes/update/'+id,plan,{headers:this.httpHeaders});
  }
  getPlanesAcademicosxUnidad(id:number): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>(this.url+'/planes/xunidad/'+id);
  }
  

  /*Services para selectores*/
  getCampus(): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus');
  }
  getFacultad(nom:string):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/campus/'+nom);
  }
  getEscuela(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/unidad/escuela/'+id);
  }
}
