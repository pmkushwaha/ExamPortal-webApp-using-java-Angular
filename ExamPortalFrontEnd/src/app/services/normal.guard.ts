import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../bin/src/app/services/user.service';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class normalGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

if (this.login.isLoggedIn()&& this.login.getUserRole()=='NORMAL') {
  return true;
}
this.router.navigate(['login']);
    return true;
  }

};
