import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Competencia } from 'src/app/modules/Competencia/models/competencia';
import { CompetenciaService} from 'src/app/modules/Competencia/services/competencia.service';
import * as $ from 'jquery';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})

export class CompetenciaComponent implements OnInit {
  competencia: any;

  competenciaModel: Competencia = new Competencia();

  constructor(public competenciaService: CompetenciaService) { }

  ngOnInit(): void {
    this.traerCampus();
    var tipos = ["Específica", "General"];

    for(var i=0; i < tipos.length; i++){ 
        var option = document.createElement("option"); //Creas el elemento opción
        $(option).html(tipos[i]); //Escribes en él el nombre de la provincia
        $(option).appendTo("#tipos"); //Lo metes en el select con id provincias
    }
   
  }
  
  tipo:any;
  obtenerTipo(value){
    console.log(value);
    this.tipo = value;
  }


  /* Selectores */

  campus:any;
  facultades:any;
  escuelas:any;
  planes:any;
  lineas:any;
  traerCampus(){
    this.competenciaService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.competenciaService.getFacultad(value).subscribe((data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {
          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
  }
  traerEscuela(value){
    this.competenciaService.getEscuela(value).subscribe((data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })

  }
  traerPlan(value){
    this.competenciaService.getPlanesAcademicosforSelector(value).subscribe((data)=>{
        this.planes = data['CURSOR_P']
        console.log(this.planes);
      })

  }
  traerLinea(value){
    this.competenciaService.getLineasxPlan(value).subscribe((data)=>{
        this.lineas = data['CURSOR_PL']
        console.log(this.lineas)
      })
  }  
  
  /* XD */
  idplan_l:number;
  getCompetencia(value){
    this.idplan_l = value;
    this.competenciaService.getDinamicidad(value).subscribe(
      (data) =>{
        this.competencia = data['CURSOR_C']
        console.log(this.competencia)
      }
    );
  }

  public create():void{
    this.competenciaModel.tipo = this.tipo;
    if(this.competenciaModel.nombre == null || this.competenciaModel.nombre.trim() == ""
    || this.competenciaModel.descripcion == null || this.competenciaModel.descripcion.trim() == ""
    || this.competenciaModel.tipo == 'Seleccione el Tipo' || this.competenciaModel.tipo == null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene todos los campos',
      })
    }else{
    this.competenciaModel.idplan_l = this.idplan_l;
   
    console.log(this.competenciaModel);
    this.competenciaService.addCompetencia(this.competenciaModel).subscribe(
      response=>{
        Swal.fire('Nueva Competencia', `La Competencia ${this.competenciaModel.nombre}  ha sido creado con exito`, "success")
        console.log(response);
      }
    )
    this.getCompetencia(this.idplan_l); // actualiza el listado
    this.limpiar();
  }
  }

  mostrarDesc(num:any){
    console.log(num)
    console.log(this.competencia[num].DESCRIPCION);
    Swal.fire({
      title: "Saber:",
      text: this.competencia[num].DESCRIPCION
    }  
    );
  }

  funcionprueba(){
    console.log(this.competenciaModel)
  }

  delCompetencia(num:number){
    console.log(num);
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
          this.competenciaService.deleteCompetencia(num).subscribe(
            response=>{
              console.log(response)
              this.getCompetencia(this.idplan_l);
            }
          )
        }
      }
    )
  }

  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';

  competencias: any;
  cargarCompetencia(num:number){
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    console.log(num)
    this.competenciaService.getCompetencia(num).subscribe(
      (data)=>{
      this.competencias=data['CURSOR_C']; 
      console.log(this.competencias)
      this.competenciaModel.nombre = this.competencias[0].NOMBRE;
      this.competenciaModel.idcomp=this.competencias[0].IDCOMP;
      this.competenciaModel.idplan_l=this.competencias[0].IDPLAN_L;
      this.competenciaModel.descripcion=this.competencias[0].DESCRIPCION;
      this.competenciaModel.tipo=this.competencias[0].TIPO;
    })
  }
  public update():void{
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
              this.competenciaService.updateCompetencia(this.competenciaModel, this.competenciaModel.idcomp).subscribe(
                response=>{
                  console.log(response);
                  this.cancelar();     

                }
              ) 
               
              this.getCompetencia(this.idplan_l);   
            }
          }   
    )
    
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
  }
  limpiar(){
    this.competenciaModel.nombre = "";
    this.competenciaModel.idcomp = null;
    this.competenciaModel.descripcion = "";

  }
}
