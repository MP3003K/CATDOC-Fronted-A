import { Injectable } from '@angular/core';
import { tipo_academica } from '../models/tipo-academica';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of, throwError } from 'rxjs';
import { AuthService } from '../../../login/login/services/auth.service';
import Swal from 'sweetalert2';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TipoAcademicaService {
  selectedTipo : tipo_academica;
  tipos : tipo_academica[];
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:9090/api/'
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { 
    this.selectedTipo = new tipo_academica();
   
  }

  private addAuthorizationHeader(){
    let token = sessionStorage.getItem('token');
    console.log(token);
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }else{
      console.log(token);
    }
    return this.httpHeaders;
  }



  getTipo(): Observable<tipo_academica[]>{
    return this.http.get<tipo_academica[]>(this.url+"tipo" , {headers : this.addAuthorizationHeader()});
  
   
  }

  addTipo(tipo_academica: tipo_academica){
       return this.http.post(this.url+"tipo", tipo_academica, {headers: this.addAuthorizationHeader()});
  }
  updateTipo(tipo_academica: tipo_academica){
     return this.http.put(this.url + 'tipo' +`/${tipo_academica.ID_TIPO_UNIDAD}`, tipo_academica, {headers: this.addAuthorizationHeader()});
  }
  deleteTipo(id : number){
    return this.http.delete(this.url + 'tipo' + `/${id}`, {headers : this.addAuthorizationHeader()}  );
  }




}
