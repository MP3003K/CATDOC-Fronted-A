import { Component, OnDestroy, OnInit } from '@angular/core';
import { LineaAcademica } from '../models/linea-academica';
import { LineaAcademicaService } from '../services/linea-academica.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-linea-academica',
  templateUrl: './linea-academica.component.html',
  styleUrls: ['./linea-academica.component.css']
})
export class LineaAcademicaComponent implements OnDestroy, OnInit {

  
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  lineas: any;
  lineaModel:LineaAcademica = new LineaAcademica();
  constructor(private lineaService:LineaAcademicaService) { }
  ngOnInit(): void {
  
    this.dtOptions = {
      destroy: true,
      lengthMenu: [[5, 10, 25, 50], [5, 10, 25, 50]],
      info: null,
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      }
    };
    this.listarLinea(); 
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  listarLinea():void{
    this.lineaService.getLineasAcademicas().subscribe(
      (data) =>{
       this.lineas = data['CURSOR_L'];
       this.dtTrigger.next();
      }) 
  }

  delLinea(num:number):void{    
        Swal.fire({
          title: '¿Desea eliminar este registro de forma permanente?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'     
        }).then(
          (result)=>{
            if(result.isConfirmed){ 
              Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
              )
              this.lineaService.deleteLineaAcademica(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarLinea();
                  $('#datatable').DataTable().destroy().draw();
                })
            }
          }
        )
    }

  l
  public create():void{
    console.log(this.lineaModel.nombre)
    if(this.lineaModel.nombre == null || this.lineaModel.nombre.trim() == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese Datos',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }else{
      this.lineaService.addLineaAcademica(this.lineaModel).subscribe(
        response=>{
          Swal.fire('Nueva Línea', `La Línea ${this.lineaModel.nombre}  ha sido creado con exito`, "success")
          console.log(response);
          this.listarLinea();
          $('#datatable').DataTable().destroy().draw();
        })
      this.limpiar();
    } 
  }
  
  public update():void{
    if(this.lineaModel.nombre == null || this.lineaModel.nombre.trim() == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese Datos',
      })
    }else{
      Swal.fire({
        title: '¿Desea actualizar el regsitro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then(
          (result)=>{
            if(result.isConfirmed){  
              Swal.fire(
                'Actualizado!',
                'El registro ha sido actualizado.',
                'success'
                )
                this.lineaService.updateLineaAcademica(this.lineaModel, this.lineaModel.id_linea).subscribe(
                  response=>{
                    console.log(response);
                    this.listarLinea();
                    $('#datatable').DataTable().destroy().draw();
                  }) 
                this.cancelar();          
              }
            }   
      )
    }  
  }
  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';

  carga:any;
  cargarRol(num:number):void{
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    this.lineaService.getLineaAcademica(num).subscribe(
      (data)=>{
        this.carga=data['CURSOR_L'] 
        this.lineaModel.nombre=this.carga[0].NOMBRE;
        this.lineaModel.id_linea=this.carga[0].ID_LINEA;
      })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarLinea();
    this.limpiar();
  }
  limpiar(){
    this.lineaModel.nombre = "";
  }
}
