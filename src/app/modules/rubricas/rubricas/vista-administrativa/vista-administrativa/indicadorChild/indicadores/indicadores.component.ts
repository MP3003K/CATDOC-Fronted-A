import { Component, OnInit, Input } from '@angular/core';
import { Cursos } from '../../../../models/cursos';
import { RubricasService } from 'src/app/modules/rubricas/rubricas/services/rubricas.service';
import { Router, ActivatedRoute, ChildActivationStart } from "@angular/router";
import { Rubricas } from "src/app/modules/rubricas/rubricas/models/rubricas";
import { Criterio } from "src/app/modules/rubricas/rubricas/models/criterios";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {
  @Input() rubrica;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  indicadores: any;
  niveles: any;

  ngOnInit(): void {
    this.getIndicador();

  }







  getIndicador() {
    this.Rubrica.getIndicadores(this.rubrica.id_rubricas).subscribe(
      (indicador) => {
        this.indicadores = indicador['indicadores']
        console.log(indicador['indicadores']);

      }


    )

  }


}
