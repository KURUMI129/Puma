import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/authLogin'; 
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)] y (ngSubmit)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Necesario para routerLink

@Component({
  selector: 'app-login',
  standalone: true,
  // Asegúrate de que FormsModule y RouterModule estén aquí
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
// CORRECCIÓN PRINCIPAL: Cambiado de 'LoginComponent' a 'Login'
export class Login {

  loginData = {
    correo: '',
    // CORRECCIÓN 'ñ': Cambiado a 'contrasena'
    contrasena: '' 
  };

  // CORRECCIÓN RUTA: Se quita 'public/'
  imagenLogin: string = 'Recursos/Logo Puma.jpeg'; 

  private adminEmails: string[] = ['karollevitafollasalazar@gmail.com'];

  constructor(
    private authService: AuthLoginService, 
    private router: Router
  ) { }

  onEmailChange(): void {
    const correo = this.loginData.correo.toLowerCase();
    if (this.adminEmails.includes(correo)) {
      // CORRECCIÓN RUTA:
      this.imagenLogin = 'Recursos/Administrador.jpg';
    } else if (correo.length > 0) {
      // CORRECCIÓN RUTA:
      this.imagenLogin = 'Recursos/Usuario.jpg';
    } else {
      // CORRECCIÓN RUTA:
      this.imagenLogin = 'Recursos/Logo Puma.jpeg';
    }
  }

  async onSubmit(): Promise<void> {
    try {
      const usuario = await this.authService.login(
        this.loginData.correo,
        // CORRECCIÓN 'ñ': Se usa 'contrasena'
        this.loginData.contrasena 
      );

      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

      this.router.navigate(['/home', usuario.rol]);

    } catch (error) {
      alert('Error: Correo o contraseña incorrectos.');
      console.error('Error en el login:', error);
    }
  }
}