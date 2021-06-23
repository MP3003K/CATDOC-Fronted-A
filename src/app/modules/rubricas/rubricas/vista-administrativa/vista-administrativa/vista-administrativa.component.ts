import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../rubricas/models/cursos';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute, ChildActivationStart } from "@angular/router";
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/modules/rubricas/rubricas/models/criterios";
import { NivelesComponent } from "src/app/modules/rubricas/rubricas/vista-administrativa/vista-administrativa/indicadorChild/indicadores/nivelesChild/niveles/niveles.component";


import Swal from 'sweetalert2'
@Component({
  selector: 'app-vista-administrativa',
  templateUrl: './vista-administrativa.component.html',
  styleUrls: ['./vista-administrativa.component.css']
})
export class VistaAdministrativaComponent implements OnInit {
  criterios: any;
  py_id: any;
  rubri: any;
  separated = []
  vista_admin : any;
  rubricas : any;
  indicadores : any;
  nivelesAll : any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { 
  



  }

  ngOnInit(): void {
    this.getRubrica();
    this.getNiveles();

  }

  getRubrica() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id1');
      console.log(id);
      this.Rubrica.getRubrica(id).subscribe(
          (rubrica) =>{
          console.log(rubrica);
          this.rubricas = rubrica['rubricas'];
          
          for(let i in rubrica['rubricas']){
            console.log(rubrica['rubricas'][i].rubrica_id);
          }
      
        }
      )
    })
  }

  getNiveles(){
    this.Rubrica.getNivelesLogro().subscribe(
    (niveles_logro)=>{
      console.log(niveles_logro['niveles_logro'])
      this.nivelesAll = niveles_logro['niveles_logro'];
    }

    )


  }
 



}
