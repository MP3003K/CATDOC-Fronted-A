import { Component, OnInit } from '@angular/core';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/modules/rubricas/rubricas/models/criterios";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {
  criterio: Criterio[];
  rubrica: any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.getRubrica();
    this.getInfoRubrica();
  }
  getRubrica() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getIndicadores(this.id).subscribe(
        (data) => {
          console.log(data['indicadores'])
          this.Rubrica.criterio = data['indicadores'] as Criterio[];
        }
      )




    });
  }
  getInfoRubrica() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getIndicador(this.id).subscribe(
        (data) => {
          console.log(data['rubrica'])
          this.rubrica = data['rubrica'];

        }
      )
    });
  }
  addCriterio(form: NgForm) {
    console.log(form.value);
    console.log(form.value);
  


    this.Rubrica.postIndicadores(form.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado Correcto!',
          showConfirmButton: false,
          timer: 1500
        })
        this.getRubrica();
      }


    
    )
    


  }
  deleteCriterio(){

  }
  editCriterio()
  {

      
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo raro pasó!',
        footer: '<a href>Porque tengo error?, ni nosotros tenemos idea pero se estabilizará</a>'
      })
     



}







}
