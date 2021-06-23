import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Modulo } from '../models/modulo';
import { ModuloService } from '../services/modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  constructor(private ModuloService : ModuloService ) { }

  ngOnInit(): void {
    this.listarmodulo();
  }
showButtonsUpdate = 'No';
showButtonAdd = 'Si';

  modulos:any;
  ModuloModel : Modulo = new Modulo()

  listarmodulo():void{
    this.ModuloService.getModulos().subscribe(
      (data) =>{
       this.modulos = data['cursor_modulos'];
      }
      ) 
  }

  agregarModulo():void{
    console.log(this.ModuloModel.nombremod)
    if(this.ModuloModel.nombremod==null|| this.ModuloModel.nombremod.trim() ==""){
      Swal.fire({
        icon: 'error',
        title :'Oops...',
        text: 'Ingrese Datos',
      })
    }else{
    console.log(this.ModuloModel);
    this.ModuloService.addModulo(this.ModuloModel).subscribe(
      response=>{
        Swal.fire('Nueva Modulo', `El modulo ${this.ModuloModel.nombremod}  ha sido creado con exito`, "success")
       
      }
    )
    this.listarmodulo();
    this.limpiar();
    }
  }


  eliminarModulo(id:number):void{    
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
          this.ModuloService.deleteModulo(id).subscribe(
            response=>{
              this.listarmodulo();
            }
          )
        }
      }
    )
}

  
  receptor : any;
  cargarModulo(id:number){
    this.showButtonAdd = 'No';
    this.showButtonsUpdate = 'Si';
    this.ModuloService.getModulo(id).subscribe( 
      (data)=>{
      this.receptor=data['cursor_modulos'] 
      console.log(this.receptor)
      this.ModuloModel.idmodulo=this.receptor[0].ID_MODULO;
      this.ModuloModel.nombremod=this.receptor[0].NOMBREMOD;
    }
    )
}

cancelar(){
  this.showButtonsUpdate = 'No';
  this.showButtonAdd = 'Si';
  this.listarmodulo();
  this.limpiar();
}

editarModulo(){
  console.log(this.ModuloModel)
  Swal.fire({
    title: '¿Desea actualizar el registro?',
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
            this.ModuloService.updateModulo(this.ModuloModel, this.ModuloModel.idmodulo).subscribe(
              response=>{
                console.log(response);
              }
            ) 
            this.cancelar();          
          }
        }   
  )
  
}
limpiar(){
  this.ModuloModel.nombremod = "";
}

}
