import { Component, OnInit, ɵConsole } from '@angular/core';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Rubricas } from 'src/app/modules/rubricas/rubricas/models/rubricas'
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Cursos } from 'src/app/modules/rubricas/rubricas/models/cursos';
import { Docente } from 'src/app/modules/rubricas/rubricas/models/docentes';
import { Proyectos } from 'src/app/modules/rubricas/rubricas/models/proyectos';
import { ThrowStmt } from '@angular/compiler';
import { AnimateTimings } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Semestre } from 'src/app/modules/rubricas/rubricas/models/semestre';

interface Ciclos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rubricas',
  templateUrl: './rubricas.component.html',
  styleUrls: ['./rubricas.component.css']
})



export class RubricasComponent implements OnInit {
  //error:Errors;
  
  rubrica: Rubricas[];
  proyectos: Proyectos[];

  semestre: any[] = [];

  // si no utilizas la variable no lo pongas 
  // poner tipo de datos en todo
  cursos: any[] = [];
  // tratar de poner todo en ingles no existe spanglish
  docente: Docente[];
  // en variabls no se ponen mayusculas
  visible: boolean[];

  //nombre del service
  //si es privado => _nombreService
  //si es publico => nombreService
  constructor(public Rubrica: RubricasService) { }

  ngOnInit(): void {
    //No juntar el ingles con el espaniol
    this.getSemestre();
  }

  getSemestre() {
    //Especificar el error del observable -( susbcribe)
    this.Rubrica.getSemestre().subscribe(
      (semestre) => {
        // no poner (data) , poner el objeto de retorno -> semestre
        // evitar data['semestres']
        console.log(semestre)
        this.semestre = semestre;
        
       
        this.Rubrica.semestre = semestre['cursor_semestre'] as Semestre[];
      }
      , (e) => {
        // Poner una alerta o poner mensaje si no hay un valor
        console.log(e)
        // this.error = new Error("Esta mal","error")
      })
  }
  getProyectos(value) {
    this.Rubrica.getProyectos(value).subscribe(
      (data) => {
        this.proyectos = data['proyectos'];
        console.log(this.proyectos);
      }
    )
  }

  





}
