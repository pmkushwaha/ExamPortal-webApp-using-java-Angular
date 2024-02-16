import { HttpClient } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';
import baseUrl from './helper';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  // method to to get current user from database
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  
  // generate Token
  public generateToken(loginData: any) {

    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }


  // login user  to set the token to local storage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;

  }


  // isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {

      return false;
    }
    else {
      return true;
    }
  }

  // loout :to remove the token from locale storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get token from locale Storage
  public getToken() {
    return localStorage.getItem('token');
  }

  //set user detail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // getUser detailes
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }


  //get user Role 
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
