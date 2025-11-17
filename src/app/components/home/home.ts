import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  providers: [ProductosService]
})
export class HomeComponent implements OnInit {

  articulos: any[] = [];

  public esAdmin: boolean = false;
  public nombreUsuario: string = '';

  constructor(
    private productosService: ProductosService, // <--- Este es tu servicio de productos
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    // --- LÓGICA DE AUTENTICACIÓN ---
    const usuarioString = localStorage.getItem('usuarioLogueado');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nombreUsuario = usuario.Nombre;

      if (usuario.Rol === 'admin') {
        this.esAdmin = true;
      } else {
        this.esAdmin = false;
      }
    } else {
      // Si no hay nadie logueado, lo mandamos al login
      alert('No has iniciado sesión.');
      this.router.navigate(['/login']);
      return;
    }

    // Cargamos los artículos
    this.getArticulos();
  }

  async getArticulos(): Promise<void> {
    try {
      const data = await this.productosService.getArticulos();
      this.articulos = data;
      console.log('Artículos cargados:', this.articulos);
    } catch (error) {
      console.error('Error al obtener artículos', error);
    }
  }
}