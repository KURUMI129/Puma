import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/authLogin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginData = {
    correo: '',
    contrasena: '' 
  };

  imagenLogin: string = 'Recursos/Logo Puma.jpeg';

  private adminEmails: string[] = ['karollevitafollasalazar@gmail.com'];

  constructor(
    private authService: AuthLoginService,
    private router: Router
  ) { }

  onEmailChange(): void {
    const correo = this.loginData.correo.toLowerCase();
    if (this.adminEmails.includes(correo)) {
      this.imagenLogin = 'Recursos/Administrador.jpg';
    } else if (correo.length > 0) {
      this.imagenLogin = 'Recursos/Usuario.jpg';
    } else {
      this.imagenLogin = 'Recursos/Logo Puma.jpeg';
    }
  }

  async onSubmit(): Promise<void> {
    try {
      const usuario = await this.authService.login(
        this.loginData.correo,
        this.loginData.contrasena 
      );

      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

      this.router.navigate(['/home']);

    } catch (error) {
      alert('Error: Correo o contraseña incorrectos.');
      console.error('Error en el login:', error);
    }
  }
}