import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cursos } from '../../../../../../models/cursos';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute, ChildActivationStart } from "@angular/router";
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/modules/rubricas/rubricas/models/criterios";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {

  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  @Input() indicador;
  ngOnInit(): void {
    this.getNivelesByNivel();
  }
  niveles: any;
  getNivelesByNivel() {



    this.Rubrica.getAllNivelLogro(this.indicador.id_criterio).subscribe(
      (niveles) => {
        console.log(niveles['niveles_rubrica']);
        this.niveles = niveles['niveles_rubrica'];
      }

    )
   

  }

}
