import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { PlanAcademico } from '../models/plan-academico';
import { PlanAcademicoService } from '../services/plan-academico.service';

@Component({
  selector: 'app-plan-academico',
  templateUrl: './plan-academico.component.html',
  styleUrls: ['./plan-academico.component.css']
})
export class PlanAcademicoComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private planService:PlanAcademicoService) { }

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
    this.listarPlanes();
    this.traerCampus();
    (document.getElementById('filtro') as HTMLInputElement).disabled = true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.myEventSubscription = this.dtTrigger.unsubscribe();
  }

  planes:any;
  planModel: PlanAcademico = new PlanAcademico();

  campus:any;
  facultades:any;
  escuelas:any;
  nom:string;

  traerCampus(){
    this.planService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
        
      })
    
  }
  traerFacultad(value:any){
    this.planService.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
      this.filtrado = false;
      this.cancelar();
      this.funcionFiltro("scampus");
  }
  traerEscuela(value){
    this.planService.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = false;
      this.cancelar();
      this.funcionFiltro("sfac");
  }

  filtrado: boolean = false; 
  filt(){
    this.filtrado = !this.filtrado;
    this.listarPlanes();
    $('#datatable2').DataTable().clear().destroy().draw();
  }
  myEventSubscription: any;
  /*CRUD Plan Academico*/
  idunidad: number = 5;

  getIdunidad(value){
    this.idunidad = value;
    this.funcionFiltro("sesc");
    this.filtrado = false; 
  }


  listarPlanes(){
    this.planService.getPlanesAcademicosxUnidad(this.idunidad).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P'];
        this.dtTrigger.next();
        this.myEventSubscription = this.dtTrigger.next(); // IMPORTANTE
      })
      this.cancelar();
  }
  
  delPlan(num:number):void{
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
          this.planService.deletePlanAcademico(num).subscribe(
            response=>{
              console.log(response)
              this.listarPlanes();
            })
        }
      }
    )
  
  }
  create():void{
    if(this.planModel.nombre == null || this.planModel.nombre.trim() == ""
    || this.planModel.ciclos == null || this.planModel.cursos == null 
    || this.planModel.creditos == null || this.planModel.anio_inicio == null
    || this.planModel.anio_inicio.trim() == "" || this.planModel.anio_termino == null
    || this.planModel.anio_termino.trim()==""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene todos los campos',
      })
    }else{
      this.planModel.idunidad = this.idunidad;
      this.planService.addPlanAcademico(this.planModel).subscribe(
        response=>{
          Swal.fire('Nuevo Plan', `El Plan ${this.planModel.nombre} ha sido creado con exito`, "success")
          console.log(response);
          this.listarPlanes();
        })
      this.limpiar();  
    }

    
  }

  showButtonAdd = "Si";
  showButtonsUpdate = "No";
  cargarPlan(num:number):void{
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    this.planService.getPlanAcademico(num).subscribe(
      (data)=>{
      this.planes=data['CURSOR_P'] 
      this.planModel.idplan=this.planes[0].IDPLAN;
      this.planModel.nombre=this.planes[0].NOMBRE;
      this.planModel.ciclos=this.planes[0].CICLOS;
      this.planModel.cursos=this.planes[0].CURSOS;
      this.planModel.creditos=this.planes[0].CREDITOS;
      this.planModel.anio_inicio=this.planes[0].ANIO_INICIO;
      this.planModel.anio_termino=this.planes[0].ANIO_TERMINO;
      }
    )
  }
  public update():void{
    if(this.planModel.nombre == null || this.planModel.nombre.trim() == ""
    || this.planModel.ciclos == null || this.planModel.cursos == null 
    || this.planModel.creditos == null || this.planModel.anio_inicio == null
    || this.planModel.anio_inicio.trim() == "" || this.planModel.anio_termino == null
    || this.planModel.anio_termino.trim()==""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene todos los campos',
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
            console.log(this.planModel.idplan)
            if(result.isConfirmed){
              Swal.fire(
                'Actualizado!',
                'El registro ha sido actualizado.',
                'success'
                )
                this.planModel.idunidad = this.idunidad;
                this.planService.updatePlanAcademico(this.planModel, this.planModel.idplan).subscribe(
                  response=>{
                    console.log(response);
                    this.listarPlanes();
                  }) 
                this.cancelar();
              }
            }   
      )
    }
    
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
  }
  cancelarup(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
    this.listarPlanes();
  }
  limpiar(){
    this.planModel.nombre = "";
    this.planModel.ciclos = null;
    this.planModel.cursos = null;
    this.planModel.creditos = null;
    this.planModel.anio_inicio = "";
    this.planModel.anio_termino = "";
  }
  
  valor:any;
  funcionFiltro(valor:string){
    this.valor = $("#"+valor+" option:selected").text();
    if(this.valor != "Elegir..." && valor == "sesc"){
      (document.getElementById('filtro') as HTMLInputElement).disabled = false;
    }else if(this.valor == "Elegir..."){
      this.filtrado = false;
      (document.getElementById('filtro') as HTMLInputElement).disabled = true;
      if(valor == "sfac" || valor == "scampus"){
        $("#sesc").find('option').not(':first').remove();
        $("#sesc").val($("#sesc option:first").val());
      }
    }else if(this.valor!="Elegir..." && valor != "sesc"){
      if(valor == "sfac"){
        (document.getElementById('filtro') as HTMLInputElement).disabled = true; 
      }else if(valor == 'scampus'){
        (document.getElementById('filtro') as HTMLInputElement).disabled = true;
        $("#sesc").find('option').not(':first').remove();
        $("#sesc").val($("#sesc option:first").val());
      }
    }
  }
}
