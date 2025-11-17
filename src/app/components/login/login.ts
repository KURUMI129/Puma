import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/authLogin'; // Importamos el nuevo servicio
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginData = {
    correo: '',
    contraseña: ''
  };

  imagenLogin: string = 'public/Recursos/Logo Puma.jpeg';

  // Usamos el correo de Karol (el admin) para el efecto visual
  private adminEmails: string[] = ['karollevitafollasalazar@gmail.com'];

  constructor(
    private authService: AuthLoginService, // Inyectamos el nuevo servicio
    private router: Router
  ) { }

  /**
   * Cambia la imagen según el correo que se escribe
   */
  onEmailChange(): void {
    const correo = this.loginData.correo.toLowerCase();
    if (this.adminEmails.includes(correo)) {
      this.imagenLogin = 'public/Recursos/Administrador.jpg';
    } else if (correo.length > 0) {
      this.imagenLogin = 'public/Recursos/Usuario.jpg';
    } else {
      this.imagenLogin = 'public/Recursos/Logo Puma.jpeg';
    }
  }

  /**
   * Se llama al presionar "Entrar"
   */
  async onSubmit(): Promise<void> {
    try {
      // 1. Llama al nuevo servicio de login
      const usuario = await this.authService.login(
        this.loginData.correo,
        this.loginData.contraseña
      );

      // 2. Guarda el usuario en localStorage
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

      // 3. Redirige a /home
      this.router.navigate(['/home']);

    } catch (error) {
      // Si el login falla
      alert('Error: Correo o contraseña incorrectos.');
      console.error('Error en el login:', error);
    }
  }
}