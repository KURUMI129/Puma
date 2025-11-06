import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Iisproductos } from '../../models/is.Model';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  isAdmin = false;
  productos: Iisproductos[] = [];
  productObj: any = {
    Foto: null,
    Nombre: '',
    Descripcion: '',
    Precio: ''
  };

  constructor(private route: ActivatedRoute, private Productos: Productos) {
    const userType = this.route.snapshot.paramMap.get('userType');
    if (userType === 'admin') {
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {
    this.loadProductsFromApi();
  }

  loadProductsFromApi(): void {
    this.Productos.obtenerProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar productos desde la API', error);
      }
    );
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.productObj.Foto = event.target.files[0];
    }
  }

  onsaveRecord() {
    console.log('Botón "Guardar" presionado. Lógica de API pendiente.');
    alert('El formulario de admin está deshabilitado temporalmente.');
    this.productObj = { Foto: null, Nombre: '', Descripcion: '', Precio: '' };
  }
}