import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonaComponent } from './modules/Persona/persona/persona.component';
import { RolComponent } from './modules/Rol/rol/rol.component';
import { ModuloComponent } from './modules/Modulo/modulo/modulo.component';
import { SemestreComponent } from './modules/Semestre/semestre/semestre.component';
import { PlanAcademicoComponent } from './modules/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './modules/PlanLinea/plan-linea/plan-linea.component';
import { CompetenciaNivelComponent } from './modules/CompetenciaNivel/competencia-nivel/competencia-nivel.component';
import { CompetenciaComponent } from './modules/Competencia/competencia/competencia.component';
import { CompetenciaCursoComponent } from './modules/CompetenciaCurso/competencia-curso/competencia-curso.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { RubricasComponent } from './modules/rubricas/rubricas/vista-principal/rubricas.component';
import { AddRubricasComponent } from './modules/rubricas/rubricas/add-rubricas/add-rubricas/add-rubricas.component';
import { VistaAdministrativaComponent } from './modules/rubricas/rubricas/vista-administrativa/vista-administrativa/vista-administrativa.component';
import { CriteriosComponent } from './modules/rubricas/rubricas/criterios/criterios/criterios.component';
import { NivelesLogroComponent } from './modules/rubricas/rubricas/niveles-logro/niveles-logro/niveles-logro.component';
import { CardProjectComponent } from './modules/rubricas/rubricas/vista-principal/card-project/card-project.component';
import { IndicadoresComponent } from './modules/rubricas/rubricas/vista-administrativa/vista-administrativa/indicadorChild/indicadores/indicadores.component';
import { NivelesComponent } from './modules/rubricas/rubricas/vista-administrativa/vista-administrativa/indicadorChild/indicadores/nivelesChild/niveles/niveles.component';
import { TipoAcademicaComponent } from './modules/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './modules/unidad-academica/unidad-academica/unidad-academica.component';
import { LoginComponent } from './modules/login/login/login.component';
import { DashBoardLeaderComponent } from './modules/dash-board-leader/dash-board-leader.component';
import { InterceptorService } from './modules/login/login/interceptores/interceptor.service';
import { InterceptorErrorService } from './modules/login/login/interceptores/interceptorerror.service';
import { AuthService } from './modules/login/login/services/auth.service';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
    ModuloComponent,
    LineaAcademicaComponent,
    SemestreComponent,
    PlanAcademicoComponent,
    PlanLineaComponent,
    CompetenciaNivelComponent,
    CompetenciaComponent,
    CompetenciaCursoComponent,
    RubricasComponent,
    AddRubricasComponent,
    VistaAdministrativaComponent,
    CriteriosComponent,
    NivelesLogroComponent,
    CardProjectComponent,
    IndicadoresComponent,
    NivelesComponent,
    TipoAcademicaComponent,
    UnidadAcademicaComponent,
    LoginComponent,
    DashBoardLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    AuthService,{
      provide :HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
   } ,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
