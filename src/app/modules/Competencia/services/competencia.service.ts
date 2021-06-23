import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competencia } from '../models/competencia';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  selecteCompetencia : Competencia;
  competencia : Competencia[];
  private httpHeaders = new HttpHeaders({'Conten-Type': 'application/json'});
  private competenciaUrl: string = 'http://localhost:9090/competencias';//endpoint
  private url: string = 'http://localhost:9090/api';

  constructor(private http: HttpClient) {
    this.selecteCompetencia = new Competencia();
   }
  getCompetencias():Observable<Competencia[]>{
    return this.http.get<Competencia[]>(this.competenciaUrl+'/all');
  }
  getCompetencia(id:number):Observable<Competencia[]> {
    return this.http.get<Competencia[]>(this.competenciaUrl+'/'+id);
  }
  
  addCompetencia(competencia: Competencia): Observable<number>{
    console.log(competencia);
    return this.http.post<number>(this.competenciaUrl+"/add", competencia, {headers:this.httpHeaders});
  }

  deleteCompetencia(num:number):Observable<number> {
    return this.http.delete<number>(this.competenciaUrl+'/delete/'+num, {headers:this.httpHeaders});
  }

  updateCompetencia(competencia: Competencia, id:number):Observable<number> {
    return this.http.put<number>(this.competenciaUrl+"/update/"+id, competencia,{headers:this.httpHeaders});
  }
  
  /* Selectores */
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

  /* Dinámico */

  getDinamicidad(id:number):Observable<Object[]> {
    return this.http.get<Object[]>(this.competenciaUrl+'/allxplanl/'+id);
  }
}