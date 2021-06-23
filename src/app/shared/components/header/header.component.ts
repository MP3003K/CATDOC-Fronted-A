import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isModConf():boolean{
    if(this.router.url==='/moduloconfig' || this.router.url==='/moduloconfig/lineas'
    || this.router.url==='/moduloconfig/planes' || this.router.url==='/moduloconfig/planlineas'){
      return true;
    }else{
      return false;
    }
  }
  isModPlan():boolean{
    if(this.router.url==='/moduloplan'){
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
    if(this.router.url==='/moduloseg'){
      return true;
    }else{
      return false;
    }
  }
}
