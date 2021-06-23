import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CompetenciaCurso } from '../models/competencia-curso';
import { CompetenciaCursoService } from '../services/competencia-curso.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-competencia-curso',
  templateUrl: './competencia-curso.component.html',
  styleUrls: ['./competencia-curso.component.css']
})
export class CompetenciaCursoComponent implements OnInit {

  constructor(private compCur: CompetenciaCursoService) { }

  ngOnInit(): void {
    this.traerCampus();
    (document.getElementById('filtro') as HTMLInputElement).disabled = true; 
    this.getCursos(21);
  }
  /*---- Selectores ---- */ 
  showButtonAdd = 'Si';
  showButtonsUpdate='No';

  campus:any;
  facultades:any;
  escuelas:any;
  planes:any;
  lineas:any;
  comps:any;
  niveles:any;

  traerCampus(){
    this.compCur.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.compCur.getFacultad(value).subscribe((data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {
          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
      this.filtrado = false;
      this.funcionFiltro("scampus");
  }
  traerEscuela(value){
    this.compCur.getEscuela(value).subscribe((data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = false;
      this.funcionFiltro("sfac");
  }
  traerPlan(value){
    this.compCur.getPlanesAcademicosforSelector(value).subscribe((data)=>{
        this.planes = data['CURSOR_P']
        console.log(this.planes);
      })
    this.filtrado = false;
    this.funcionFiltro("sesc");
  }
  traerLinea(value){
    this.compCur.getLineasxPlan(value).subscribe((data)=>{
        this.lineas = data['CURSOR_PL']
        console.log(this.lineas);
      })
    this.filtrado = false;
    this.funcionFiltro("splan");
  }
  traerCompetencia(value){
    console.log(value)
    this.compCur.getCompetencias(value).subscribe((data)=>{
        this.comps = data['CURSOR_C'];
        console.log(this.comps);
      })
    this.filtrado = false;
    this.funcionFiltro("slinea");
  }

  nomcomp:any;
  listarNivelesCompetencias(value){
    this.filtrado=false;
    this.compCur.getCompetenciaNivelesDin(value).subscribe((data)=>{
        this.niveles = data['CURSOR_CN']
        console.log(this.niveles);
      })
      this.nomcomp = $("#comp option:selected").text();
      this.funcionFiltro("scomp");
  }
  filtrado: boolean = false;
  filt(){
    this.filtrado = true;
  } 

  idcomp_n:number; //add

  nomnivel:any;
  competenciasCursos:any
  listadoTabla(value){
    this.filtrado=false;
    this.idcomp_n = value;
    console.log('idcomp_n: '+this.idcomp_n)
    this.compCur.getCompetenciaCursos(value).subscribe(
      (data)=>{
        this.competenciasCursos = data['CURSOR_CC'];
        console.log(this.competenciasCursos)
      }
    )

    this.funcionFiltro("niv");
  }
  

  valor:any;
  funcionFiltro(valor:string){
    this.valor = $("#"+valor+" option:selected").text();
    if(this.valor != "Elegir..." && valor == "niv"){
      (document.getElementById('filtro') as HTMLInputElement).disabled = false;
    }else if(this.valor == "Elegir..."){
      this.filtrado = false;
      (document.getElementById('filtro') as HTMLInputElement).disabled = true;
      if(valor == "sfac" || valor == "scampus" ){
        $("#sesc").find('option').not(':first').remove();
        $("#sesc").val($("#sesc option:first").val());
        $("#splan").find('option').not(':first').remove();
        $("#splan").val($("#splan option:first").val());
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == "sesc"){
        $("#splan").find('option').not(':first').remove();
        $("#splan").val($("#splan option:first").val());
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == "slinea"){
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
        $("#niv").find('option').not(':first').remove();
        $("#niv").val($("#niv option:first").val());
      }else if(valor == "splan"){
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == "scomp"){
        $("#niv").find('option').not(':first').remove();
        $("#niv").val($("#niv option:first").val());
      }
    }else if(this.valor!="Elegir..." && valor != "scomp"){
      (document.getElementById('filtro') as HTMLInputElement).disabled = true; 
      if(valor == "sfac"){
        $("#splan").find('option').not(':first').remove();
        $("#splan").val($("#splan option:first").val());
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == 'scampus'){
        $("#sesc").find('option').not(':first').remove();
        $("#sesc").val($("#sesc option:first").val());
        $("#splan").find('option').not(':first').remove();
        $("#splan").val($("#splan option:first").val());
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == "splan"){
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }else if(valor == "sesc"){
        $("#slinea").find('option').not(':first').remove();
        $("#slinea").val($("#slinea option:first").val());
        $("#scomp").find('option').not(':first').remove();
        $("#scomp").val($("#scomp option:first").val());
      }
    }
  }

  /*Implementar funcion en cadena de los selectores */

  cursos:any;
  getCursos(value){
    this.compCur.getCursosxPlan(value).subscribe(
      (data)=>{
        this.cursos = data['CURSOR_CP'];
        console.log(this.cursos)
      }
    )
  }
  
  idcursoplan:any; //add
  obtenerIdcursoplan(value){
    this.idcursoplan = value;
    console.log('id_curso_plan: '+this.idcursoplan)
  }
  
  compcursoModel: CompetenciaCurso= new CompetenciaCurso();
  create(){
    this.compcursoModel.id_curso_plan = this.idcursoplan;
    this.compcursoModel.idcomp_n = this.idcomp_n;
    if(this.compcursoModel.id_curso_plan == null || this.compcursoModel.id_curso_plan.toString() == "Elige..."){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene todos los campos...',
      })
    }else{
      console.log(this.compcursoModel)
      this.compCur.addCompetenciaCurso(this.compcursoModel).subscribe(
        response=>{
          Swal.fire('Nuevo Curso - Competencia', `El curso se ha registrado a la competencia y nivel`, "success")
          console.log(response);
          this.listadoTabla(this.idcomp_n);
        })
    }
   
   // actualiza el listado
  }
  delete(num:number){
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
          this.compCur.deleteCompetenciaCurso(num).subscribe(
            response=>{
              console.log(response)
              this.listadoTabla(this.idcomp_n);
            })
        }
      }
    )
  }
  cancelar(){

  }
}
