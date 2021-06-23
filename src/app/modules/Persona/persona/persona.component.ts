import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private PersonaService : PersonaService ) { }

  ngOnInit(): void {
    this.listarpersona();
    
  }
showButtonsUpdate = 'No';
showButtonAdd = 'Si';

  personas:any;
  PersonaModel : Persona = new Persona()

  listarpersona():void{
    this.PersonaService.getPersonas().subscribe(
      (data) =>{
       this.personas = data['cursor_personas'];
       console.log(this.personas)
      }
      ) 
  }

  agregarPersona():void{
    console.log(this.PersonaModel.nombres)
    if(this.PersonaModel.nombres==null|| this.PersonaModel.nombres.trim() ==""
    || this.PersonaModel.apepat==null || this.PersonaModel.apepat.trim()==""
    || this.PersonaModel.apemat==null || this.PersonaModel.apemat.trim()==""
    || this.PersonaModel.dni==null || this.PersonaModel.dni.trim()==""
    || this.PersonaModel.telefono==null || this.PersonaModel.telefono.trim()==""){
      Swal.fire({
        icon: 'error',
        title :'Oops...',
        text: 'Ingrese todos los campos',
      })
    }else{
    console.log(this.PersonaModel);
    this.PersonaService.addPersona(this.PersonaModel).subscribe(
      response=>{
        Swal.fire('Nueva Persona', `La persona ${this.PersonaModel.nombres}  ha sido creado con exito`, "success")
      }
       )
    this.listarpersona();
    this.limpiar();
    }
  }


  eliminarPersona(id:number):void{   
    console.log(id) 
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
          this.PersonaService.deletePersona(id).subscribe(
            response=>{
              this.listarpersona();
            }
          )
        }
      }
    )
}

  editarPersona(){
    console.log(this.PersonaModel)
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
              this.PersonaService.updatePersona(this.PersonaModel, this.PersonaModel.idpersona).subscribe(
                response=>{
                  console.log(response);
                }
              ) 
              this.cancelar();          
            }
          }   
    )
    
  }
  receptor : any;
  cargarPersona(id:number){
    this.showButtonAdd = 'No';
    this.showButtonsUpdate = 'Si';
    this.PersonaService.getPersona(id).subscribe( 
      (data)=>{
      this.receptor=data['cursor_personas'] 
      this.PersonaModel.idpersona=this.receptor[0].ID_PERSONA;
      this.PersonaModel.nombres=this.receptor[0].NOMBRES;
      this.PersonaModel.apepat=this.receptor[0].APE_PAT;
      this.PersonaModel.apemat=this.receptor[0].APE_MAT;
      this.PersonaModel.dni=this.receptor[0].DNI;
      this.PersonaModel.telefono=this.receptor[0].TELEFONO;
    }
    )
}

cancelar(){
  this.showButtonsUpdate = 'No';
  this.showButtonAdd = 'Si';
  this.listarpersona();
  this.limpiar();
}
limpiar(){
  this.PersonaModel.nombres = "";
  this.PersonaModel.apepat="";
  this.PersonaModel.apemat="";
  this.PersonaModel.dni="";
  this.PersonaModel.telefono="";
}
}
