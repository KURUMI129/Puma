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
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userType: string = 'user';
  loginObj: any = {
    email: '',
    password: '',
    adminId: ''
  };

  router = inject(Router);
  
  setUserType(type: string) {
    this.userType = type;
  }

  onLogin() {
    if (this.userType == 'admin') {
      // Lógica para el administrador
      if (this.loginObj.adminId == '01' && this.loginObj.password == '123') {
        this.router.navigate(['/home', 'admin']);
      } else {
        alert("Credenciales de administrador incorrectas");
      }
    } else {
      // Lógica para el usuario normal con datos de pruebapanel
      if (this.loginObj.email == 'Cadenaj285@gmail.com' && this.loginObj.password == '123') {
        this.router.navigate(['/home', 'user']);
      } else {
        alert("Credenciales de usuario incorrectas");
      }
    }
  }
}