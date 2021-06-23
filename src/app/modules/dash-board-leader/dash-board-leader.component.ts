import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/login/login/services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MergeScanSubscriber } from 'rxjs/internal/operators/mergeScan';

@Component({
  selector: 'app-dash-board-leader',
  templateUrl: './dash-board-leader.component.html',
  styleUrls: ['./dash-board-leader.component.css']
})
export class DashBoardLeaderComponent implements OnInit {

  menus : object[]=null;
  user:any;
  constructor(public authService:AuthService, public router:Router) { 
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
    console.log(this.user);
  }

  ngOnInit(): void {
    this.menu();  
     
  }
  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success')
    this.router.navigate(['/']);
  }
  menu():void{
    if(this.authService.isAuthenticated()){

      this.menus=this.user.accesos;
      console.log(this.user.accesos);
    }
  }

}
