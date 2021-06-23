import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../rubricas/models/cursos';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-rubricas',
  templateUrl: './add-rubricas.component.html',
  styleUrls: ['./add-rubricas.component.css']
})
export class AddRubricasComponent implements OnInit {
  curso: Cursos[];
  rubricas: Rubricas[];
  id_carga: any;
  id : any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurso();
    this.getRubrica();
  }

  getCurso() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log( this.id);
      this.Rubrica.getCurso( this.id).subscribe(
        (data) => {
          console.log(data['cursos']);
          this.Rubrica.curso = data['cursos'] as Cursos[];
        }
      )
    });
  }
  getRubrica() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log(this.id);
      this.Rubrica.getRubrica(this.id).subscribe(
        (data) => {
          console.log(data['rubricas']);
          this.Rubrica.rubrica = data['rubricas'] as Rubricas[];
        }


      )


    })
  }
  ChooseCurso(value) {
    this.id_carga = value;
  }
  addRubrica(form: NgForm) {
    console.log(form.value);
    if(form.value.peso === " "){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas rellenar todos los campos!',
      })
    }else{




    this.Rubrica.postRubrica(form.value).subscribe(
   




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
  }


  deleteRubrica(id: number) {
    Swal.fire({
      title: 'Estás seguro de eliminar este elemento?',
      text: "No podrás recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu elemento fue eliminado correctamente.',
          'success'
        )
        this.Rubrica.deleteRubrica(id).subscribe(
          (res)=>{
            console.log(res);
            this.getRubrica();
          }
        )

      }
    

    })
  }
  editRubrica(){
   
    setTimeout(() =>{
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Error database !',
        footer: '<a href = "https://www.facebook.com/photo?fbid=887496641334653&set=a.100560300028295 target="_blank" >Contactar con el area de TI</a>'
      })

    }, 5000);

  }






}








