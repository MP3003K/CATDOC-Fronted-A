import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Rol } from '../models/rol';
import { RolService } from '../services/rol.service';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
    this.listarRoles();
  }
  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';

  roles:any;

  rolModel: Rol = new Rol();

  listarRoles():void{
      this.rolService.getRoles().subscribe(
        (data)=>{
          this.roles = data['cursor_roles'];
        }
      )
  }

  agregarRol():void{
    console.log(this.rolModel.nombre)
    if(this.rolModel.nombre==null|| this.rolModel.nombre.trim() ==""){
      Swal.fire({
        icon: 'error',
        title :'Oops...',
        text: 'Ingrese Datos',
      })
    }else{
    this.rolService.addRol(this.rolModel).subscribe(
      response=>{
        Swal.fire('Nuevo Rol', `El Rol ${this.rolModel.nombre}  ha sido creado con exito`, "success")
      }
    )
    this.listarRoles();
    this.limpiar();
  }
  }

  eliminarRol(id:number):void{
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
          this.rolService.deleteRol(id).subscribe(
            response=>{
              this.listarRoles();
            }
          )
        }
      }
    )
  }

  receptor:any;
  cargarRol(id:number){
    this.showButtonAdd = 'No';
    this.showButtonsUpdate = 'Si';
    this.rolService.getRol(id).subscribe(
      (data)=>{
        this.receptor=data['cursor_roles']
        this.rolModel.idrol = this.receptor[0].ID_ROL;
        this.rolModel.nombre = this.receptor[0].NOMBRE;
      }
    )
  }

  cancelar(){
    this.showButtonAdd = 'Si';
    this.showButtonsUpdate = 'No';
    this.listarRoles();
    this.limpiar();
  }

  editarRol(){
    console.log(this.rolModel);
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
              this.rolService.updateRol(this.rolModel, this.rolModel.idrol).subscribe(
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
    this.rolModel.nombre = "";
  }
}
