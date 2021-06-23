import { Component, OnInit } from '@angular/core';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/modules/rubricas/rubricas/models/criterios";
import { Nivellogro } from "src/app/modules/rubricas/rubricas/models/nivellogro";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-niveles-logro',
  templateUrl: './niveles-logro.component.html',
  styleUrls: ['./niveles-logro.component.css']
})
export class NivelesLogroComponent implements OnInit {
  id: any;
  idnivel : any;
  infoCriterio: any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  criterios: Criterio[];
  niveles : any;
  nivel : any;
  ngOnInit(): void {
    this.getInfoCriterio();
    this.getSelectNivel();
    this.getAllNivel();
  }
  getInfoCriterio() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.Rubrica.getNivel(this.id).subscribe(
        (data) => {
          console.log(data['indicador']);
          this.infoCriterio = data['indicador'];
        }


      )

    })
  }
  getSelectNivel() {
    this.Rubrica.getNivelesLogro().subscribe(
      (data) => {
        console.log(data);
        this.Rubrica.niveles = data['niveles_logro'] as Nivellogro[];
      }

    )
  }
  getAllNivel() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getAllNivelLogro(this.id).subscribe(
        (data)=>{
            this.nivel = data['niveles_rubrica'] as Nivellogro[];
            console.log( this.nivel);

        }
      )



    }
    )
  }
  ChooseNivel(value : any)
  {
    this.idnivel = value;
  }

  addNivel(form : NgForm){
    console.log(form.value);
    console.log(form.value);



    this.Rubrica.postNivellogro(form.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado Correcto!',
          showConfirmButton: false,
          timer: 1500
        })
        this.getInfoCriterio();
        this.getAllNivel();
      }



    )
    


  }
  deleteNivel(){
    
  }
  editNivel(){
    
  }



}