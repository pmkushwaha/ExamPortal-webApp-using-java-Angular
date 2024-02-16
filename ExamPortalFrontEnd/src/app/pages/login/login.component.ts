import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from '../../services/login.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor(private snack: MatSnackBar, private login: LoginService) { }

  public loginData = {
    username: "",
    password: "",
  }
  ngOnInit(): void {

  }


  formSubmit() {

    //validation for username
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {

      this.snack.open("Username is required!!", "ok", {
        duration: 3000,

      });
      return;
    }
    //validation for password
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("Password is required!!", "ok", {
        duration: 3000,

      });
      return;
    }


    // request th server to generate the token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("success");
        console.log(data);

        // login
        this.login.loginUser(data.token);


        // to fetch current user 
        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);

          // redirecting ....ADMIN User
          // redirecting ....NORMAL User 

          if (this.login.getUserRole() == 'ADMIN') {
            // admin Dashboard it open 
            window.location.href = '/dashboard';

          } else if (this.login.getUserRole() == 'NORMAL') {
            // normal user -dashboard will open

            window.location.href = '/user-dashboard';
          } else {
            this.login.logout();
          }


        })
      },
      (error) => {
        console.log("Error !");
        console.log(error);
        this.snack.open("Invailid Details !! Try again", '', { duration: 3000, });
      }
    );
  }
}
