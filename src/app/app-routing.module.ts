import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CompetenciaComponent } from './modules/Competencia/competencia/competencia.component';
import { CompetenciaCursoComponent } from './modules/CompetenciaCurso/competencia-curso/competencia-curso.component';
import { CompetenciaNivelComponent } from './modules/CompetenciaNivel/competencia-nivel/competencia-nivel.component';
import { HomeComponent } from './modules/home/home.component';
import { ModuloComponent } from './modules/Modulo/modulo/modulo.component';
import { PersonaComponent } from './modules/Persona/persona/persona.component';
import { RolComponent } from './modules/Rol/rol/rol.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { ModuloConfigComponent } from './modules/Modulos/modulo-config/modulo-config.component';
import { ModuloEjeComponent } from './modules/Modulos/modulo-eje/modulo-eje.component';
import { ModuloInfComponent } from './modules/Modulos/modulo-inf/modulo-inf.component';
import { ModuloPlanComponent } from './modules/Modulos/modulo-plan/modulo-plan.component';
import { ModuloSegComponent } from './modules/Modulos/modulo-seg/modulo-seg.component';
import { PlanAcademicoComponent } from './modules/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './modules/PlanLinea/plan-linea/plan-linea.component';
import { SemestreComponent } from './modules/Semestre/semestre/semestre.component';
import { LoginComponent } from './modules/login/login/login.component';
import { TipoAcademicaComponent } from './modules/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './modules/unidad-academica/unidad-academica/unidad-academica.component';
import { RubricasComponent } from './modules/rubricas/rubricas/vista-principal/rubricas.component';
import { AddRubricasComponent } from './modules/rubricas/rubricas/add-rubricas/add-rubricas/add-rubricas.component';
import { VistaAdministrativaComponent } from './modules/rubricas/rubricas/vista-administrativa/vista-administrativa/vista-administrativa.component';
import { CriteriosComponent } from './modules/rubricas/rubricas/criterios/criterios/criterios.component';
import { NivelesLogroComponent } from './modules/rubricas/rubricas/niveles-logro/niveles-logro/niveles-logro.component';
import { AuthrutasGuard } from './modules/login/login/services/guards/authrutas.guard';
import { RoleGuard } from './modules/login/login/services/guards/role.guard';
import { DashBoardLeaderComponent } from './modules/dash-board-leader/dash-board-leader.component';

/*
Agregar en children cada path por cada componente (CRUD)
*/
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '', 
    component: HomeComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'dashl', 
    component: DashBoardLeaderComponent , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}
  }, {
    path: 'moduloconfig',
    component: ModuloConfigComponent
  }, {
    path: 'moduloseg/persona',
    component: PersonaComponent
  }, {
    path: 'moduloseg/roles',
    component: RolComponent
  }, {
    path: 'moduloseg/modulos',
    component: ModuloComponent  
  }, {
    path: 'dashl/moduloplan',
    component: ModuloPlanComponent
  }, {
    path: 'moduloeje',
    component: ModuloEjeComponent
  }, {
    path: 'moduloinf',
    component: ModuloInfComponent
  }, {
    path: 'moduloseg',
    component: ModuloSegComponent
  }, {
    path: 'moduloconfig/lineas',
    component: LineaAcademicaComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/semestres',
    component: SemestreComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/planes',
    component: PlanAcademicoComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/planlineas',
    component: PlanLineaComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/competenciasniveles',
    component: CompetenciaNivelComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/competencia',
    component: CompetenciaComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path: 'moduloconfig/competenciascursos',
    component: CompetenciaCursoComponent, canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Comision Curriculo'}
  }, {
    path : 'login', component : LoginComponent
  }, {
    path : 'tipo',
    component : TipoAcademicaComponent , canActivate : [AuthrutasGuard, RoleGuard], data : {role :  'Administrador'}
  }, {
    path : 'unidad',
    component : UnidadAcademicaComponent, canActivate : [AuthrutasGuard, RoleGuard], data : {role :  'Administrador'}
  }, {
    path : 'rubricas',
    component : RubricasComponent  , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}
  }, {
    path : 'rubricas/:id',
    component : AddRubricasComponent  , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}

  }, {
    path: 'rubricas/vista/admin/:id1',
    component : VistaAdministrativaComponent  , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}
  }, {
    path : 'rubricas/indicador/:id',
    component : CriteriosComponent  , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}
  }, {
    path : 'rubricas/indicador/nivellogro/:id',
    component : NivelesLogroComponent  , canActivate : [AuthrutasGuard, RoleGuard] , data : {role : 'Lider'}
  }
]
}];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
