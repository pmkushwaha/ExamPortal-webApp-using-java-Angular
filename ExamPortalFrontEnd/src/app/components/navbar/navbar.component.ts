import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{
  constructor(public login:LoginService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 public logout(){
  this.login.logout();
  window.location.reload();
 }

}
