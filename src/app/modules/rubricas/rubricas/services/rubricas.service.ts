import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of, throwError, from } from 'rxjs';
import { Rubricas } from '../models/rubricas';
import { Cursos } from '../models/cursos';
import { Docente } from '../models/docentes';
import { Router } from '@angular/router';
import { Semestre } from '../models/semestre';
import { Proyectos } from "../models/proyectos";
import { Criterio } from "../../rubricas/models/criterios";
import { Nivellogro } from "../../rubricas/models/nivellogro";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class RubricasService {
  selectedRubri: Rubricas;
  rubrica: Rubricas[];
  curso: Cursos[];
  docente: Docente[];
  semestre: Semestre[];
  proyecto: Proyectos[];
  criterio: Criterio[];
  niveles: Nivellogro[];
  selectedCriterio: Criterio;
  selectedNivel : Nivellogro;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url: string = 'http://localhost:9090/api/'
  private urlGanssuo : string = 'http://localhost:9090/semestre/all'
  

 

  constructor(private http: HttpClient, private router: Router) {
    this.selectedRubri = new Rubricas();
    this.selectedCriterio = new Criterio();
    this.selectedNivel = new Nivellogro();
    
  }


  getSemestre(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(this.urlGanssuo, { headers: this.httpHeaders });


  }
  getProyectos(id: number): Observable<any> {
    return this.http.get<Proyectos[]>(this.url + "proyectos/" + id);

  }
  getCurso(id: number): Observable<any> {
    return this.http.get<Cursos[]>(this.url + "proyectos/curso/" + id);
  }

  getRubrica(id: string): Observable<any> {
    return this.http.get<Rubricas[]>(this.url + "rubrica/" + id);
  }
  postRubrica(rubri: Rubricas) {
    return this.http.post(this.url + 'rubrica', rubri, { headers: this.httpHeaders });
  }
  deleteRubrica(id : number){
    return this.http.delete(this.url + 'rubrica/' + id);
  }


  getIndicador(id: number): Observable<any> {
    return this.http.get<Criterio[]>(this.url + "rubrica/indicador/" + id);
  }


  getIndicadores(id: number): Observable<any> {
    return this.http.get<Criterio[]>(this.url + "rubrica/indicadores/" + id);
  }
  postIndicadores(criterio: Criterio) {
    return this.http.post(this.url + 'rubrica/indicador', criterio, { headers: this.httpHeaders });
  }
  getNivel(id: number): Observable<any> {
    return this.http.get<Criterio[]>(this.url + "rubrica/niveles_logro/indicador/" + id);
  }
  getNivelesLogro(): Observable<any> {
    return this.http.get<Nivellogro[]>(this.url + "rubrica/niveles_logro", { headers: this.httpHeaders });
  }
  getAllNivelLogro(id: number): Observable<any> {
    return this.http.get<Nivellogro[]>(this.url + "rubrica/nivel_rubrica/" + id);
  }

  getAllAdministrator(id1: string, id2: string): Observable<any> {
    return this.http.get<any>(this.url + "rubrica/admin/" + id1 + "/" + id2);
  }



  getAllInfo(id: number): Observable<any> {
    return this.http.get<any>(this.url + "/proyecto/union/" + id, { headers: this.httpHeaders });
  }
  postNivellogro(nivel : Nivellogro){
    return this.http.post(this.url + 'rubrica/nivel_rubrica/', nivel , { headers: this.httpHeaders });

  }




}
