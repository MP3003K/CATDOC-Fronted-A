import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Semestre } from 'src/app/modules/Semestre/models/semestre';
import { SemestreService } from 'src/app/modules/Semestre/services/semestre.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {

  semestre: any;
  
  semestreModel: Semestre = new Semestre();

  constructor(public semestreService: SemestreService) { }

  ngOnInit(): void {  
    this.getSemestre();
  }

  getSemestre() {
    this.semestreService.getSemestres().subscribe(
      (data) => {
        this.semestre = data['cursor_semestre'];
        console.log(this.semestre)
      }
    );
  }
    
   public create():void{
     console.log(this.semestreModel.nombre)
     if(this.semestreModel.nombre == null || this.semestreModel.nombre.trim() == ""){
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Ingrese Datos',
       })
     } else{
      this.semestreService.addSemestre(this.semestreModel).subscribe(
        response=>{
          Swal.fire('Nuevo Semestre', `El semestre ${this.semestreModel.nombre}  ha sido creado con exito`, "success")
          console.log(response);
        }
      )
      this.getSemestre(); // actualiza el listado
      this.limpiar();
    }
  }
    delSemestre(num:number){
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
            this.semestreService.deleteSemestre(num).subscribe(
              response=>{
                console.log(response)
                this.getSemestre();
              }
            )
          }
        }
      )
    }

    showButtonsUpdate = 'No';
    showButtonAdd = 'Si';


    semestres: any;
    cargarSemestre(num:number){
      this.showButtonsUpdate = 'Si';
      this.showButtonAdd = 'No';
      console.log(num)
      this.semestreService.getSemestre(num).subscribe(
        (data)=>{
        this.semestres=data['cursor_semestre']; 
        console.log(this.semestres)
        this.semestreModel.nombre = this.semestres[0].NOMBRE;
        this.semestreModel.id_semestre=this.semestres[0].ID_SEMESTRE;
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
                this.semestreService.updateSemestre(this.semestreModel, this.semestreModel.id_semestre).subscribe(
                  response=>{
                    console.log(response);
                  }
                ) 
                this.cancelar();       
                this.getSemestre();   
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
      this.semestreModel.nombre = "";
      this.semestreModel.id_semestre = null;
    }
}

