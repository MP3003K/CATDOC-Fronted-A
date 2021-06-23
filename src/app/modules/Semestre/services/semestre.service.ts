import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semestre } from '../models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  selecteSemestre : Semestre;
  semestre : Semestre[];
  private httpHeaders = new HttpHeaders({'Conten-Type': 'application/json'});
  private semestreUrl: string = 'http://localhost:9090/semestre';//endpoint

  constructor(private http: HttpClient) {
    this.selecteSemestre = new Semestre();
   }
  getSemestres():Observable<Semestre[]>{
    return this.http.get<Semestre[]>(this.semestreUrl+'/all');
  }
  getSemestre(id:number):Observable<Semestre[]> {
    return this.http.get<Semestre[]>(this.semestreUrl+'/'+id);
  }
  
  addSemestre(semestre: Semestre): Observable<number>{
    return this.http.post<number>(this.semestreUrl+"/add", semestre, {headers:this.httpHeaders});
  }

  deleteSemestre(num:number):Observable<number> {
    return this.http.delete<number>(this.semestreUrl+'/delete/'+num, {headers:this.httpHeaders});
  }

  updateSemestre(semestre: Semestre, id:number):Observable<number> {
    return this.http.put<number>(this.semestreUrl+"/update/"+id, semestre,{headers:this.httpHeaders});
  }
  
}
