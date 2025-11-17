import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
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
  providers: [Productos]
})

export class Home implements OnInit {

  articulos: any[] = [];

  public esAdmin: boolean = false;
  public nombreUsuario: string = '';

  constructor(
    private productosService: Productos,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
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
      alert('No has iniciado sesión.');
      this.router.navigate(['/login']);
      return;
    }

    this.getArticulos();
  }

  async getArticulos(): Promise<void> {
    try {
      const data = await firstValueFrom(this.productosService.obtenerProductos());
      this.articulos = data;
      console.log('Artículos cargados:', this.articulos);
    } catch (error) {
      console.error('Error al obtener artículos', error);
    }
  }
}