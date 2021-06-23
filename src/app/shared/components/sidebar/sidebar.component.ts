import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Usuario } from 'src/app/modules/login/login/models/Usuario';
import { AuthService } from 'src/app/modules/login/login/services/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, public authService:AuthService) { }
  menus : object[]=null;
  user:any;
  


  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
    console.log(this.user);
    this.isLider();






    // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.side-navbar').toggleClass('shrinked');
      $('.content-inner').toggleClass('active');
      $(document).trigger('sidebarChanged');


      if ($(window).outerWidth() > 1183) {
          if ($('#toggle-btn').hasClass('active')) {
            console.log('Entrando en primer IF')
              $('.navbar-header .brand-small').hide();
              $('.navbar-header .brand-big').show();
          } else {
            console.log('Entrando en primer IF ELSE')
              $('.content-inner').toggleClass('active');
              $('.navbar-header .brand-small').show();
              $('.navbar-header .brand-big').hide();
          }
      }

      if ($(window).outerWidth() < 1183) {
          $('.navbar-header .brand-small').show();
      }
  });
  }

  isModConf():boolean{
    if(this.router.url==='/moduloconfig' || this.router.url==='/moduloconfig/lineas'
    || this.router.url==='/moduloconfig/planes' || this.router.url==='/moduloconfig/planlineas'
    || this.router.url==='/moduloconfig/competenciasniveles' || this.router.url==='/moduloconfig/semestres'
    || this.router.url==='/moduloconfig/competencia' || this.router.url==='/moduloconfig/competenciascursos'
    || this.router.url==='/tipo' || this.router.url==='/unidad' || this.router.url === '/moduloconfig/persona' 
    || this.router.url==='/moduloconfig/persona'  || this.router.url==='/moduloconfig/roles'  || this.router.url==='/moduloconfig/modulos'){
      return true;
    }else{
      return false;
    }
  }
  isHome():boolean{
    if(this.router.url==='/'){
      return true;
    }else{
      return false;
    }
  }
  isModPlan():boolean{
    if(this.router.url==='/dashl/moduloplan' || this.router.url === '/rubricas'){
      return true;
    }else{
      return false;
    }

  }
  isModEje():boolean{
    if(this.router.url==='/moduloeje'){
      return true;
    }else{
      return false;
    }
  }
  isModInf():boolean{
    if(this.router.url==='/moduloinf'){
      return true;
    }else{
      return false;
    }
  }
  isModSeg():boolean{
    if(this.router.url==='/moduloseg' || this.router.url==='/moduloseg/persona' || this.router.url==='/moduloseg/roles'
    || this.router.url==='/moduloseg/modulos'){
      return true;
    }else{
      return false;
    }
  }
  isLider():boolean{
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
    if(this.user.roles[0] == "Lider"){
      console.log("es Lider");
      return true
    }else{
      console.log("es papanoel")
      return false;
    }
  }

  isComision():boolean{
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
    if(this.user.roles[0] == "Comision Curriculo"){
      console.log("es Comision Curriculo");
      return true
    }else{
      console.log("es papanoel")
      return false;
    }
  }
  isAdiminstrador():boolean{
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
    if(this.user.roles[0] == "Administrador"){
      console.log("es Administrador");
      return true
    }else{
      console.log("es papanoel")
      return false;
    }
  }




}

