/* import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
 */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Router, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userType: string = 'user';
  loginObj: any = {
    email: '',
    password: '',
    adminId: ''
  }

  router = inject(Router);
  

  setUserType(type: string) {
    this.userType = type;
  }


  onLogin(){
    if(this.loginObj.adminId == '01' && this.loginObj.password == '123'){
      this.router.navigateByUrl("home");
    }
    else{
      alert("Wrong credentials");
    }

  }
}