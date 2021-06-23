import { Component, OnInit } from '@angular/core';
import { tipo_academica } from 'src/app/modules/tipo-academica/tipo-academica/models/tipo-academica'
import { TipoAcademicaService } from 'src/app/modules/tipo-academica/tipo-academica/services/tipo-academica.service';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tipo-academica',
  templateUrl: './tipo-academica.component.html',
  styleUrls: ['./tipo-academica.component.css']
})
export class TipoAcademicaComponent implements OnInit {
  tipos: tipo_academica[];
  constructor(public tipo_academicaService: TipoAcademicaService, private router:Router) { }
  estado = this.tipo_academicaService.selectedTipo.ESTADO == 1;
  ngOnInit(): void {
    this.getTipos()
  }
  getTipos() {
    this.tipo_academicaService.getTipo().subscribe(
      (data) => {
        /*
         this.tipos = data['CURSOR_T'];
         console.log(this.tipos);
         */
        this.tipo_academicaService.tipos = data['CURSOR_T'] as tipo_academica[];
        console.log(this.tipo_academicaService.tipos);

      }
    );
  }
  addTipo(form: NgForm) {
    if (form.value.ID_TIPO_UNIDAD) {
      console.log("update")
      if (form.value.nombre == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Necesitas rellenar todos los campos!',
        })
      } else {


        this.tipo_academicaService.updateTipo(form.value).subscribe(res => {
          console.log(res);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Editado Correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          this.resetForm(form);
          this.getTipos();
        });
      }
    } else {
      console.log(form.value);
      if (form.value.nombre == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Necesitas rellenar todos los campos!',
        })
      } else {
        this.tipo_academicaService.addTipo(form.value).subscribe(res => {
          console.log(form.value);
          console.log(res);
          this.getTipos();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Guardado Correcto!',
            showConfirmButton: false,
            timer: 1500
          })
          this.resetForm(form);
        });
      }
    }
  }
  editTipos(tipo: tipo_academica) {
    this.tipo_academicaService.selectedTipo = tipo;

    console.log(this.tipo_academicaService.selectedTipo.NOMBRE = tipo.NOMBRE);
  }
  deleteTipo(id: number) {
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
        this.tipo_academicaService.deleteTipo(id).subscribe(res => {
          this.getTipos();
          this.resetForm();
          console.log(res);
        })
      }
    })
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tipo_academicaService.selectedTipo = new tipo_academica();
    }
  }
}

