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
  
  // Esta lista se llenará con los datos de la API (Base de Datos)
  productos: Iisproductos[] = [];

  productObj: any = {
    photo: null, 
    name: '',
    description: '',
    price: ''
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

   // Carga la lista de productos desde la API del backend.
  loadProductsFromApi(): void {
    this.Productos.obtenerProductos().subscribe(
      (data) => {
        // Asigna los datos de la API a nuestra variable local
        this.productos = data;
      },
      (error) => {
        // Manejo de error si el backend no responde
        console.error('Error al cargar productos desde la API', error);
      }
    );
  }

   // Esta función guarda el archivo seleccionado en el objeto temporal.
   // Se mantiene para que el formulario no falle.
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.productObj.photo = event.target.files[0];
    }
  }

  // Por el momento esta funcion no tiene nada de utilidad solo esta para que no de problemas el formulario
  onsaveRecord() {
    console.log('Botón "Guardar" presionado. Lógica de API pendiente.');
    alert('El formulario de admin está deshabilitado temporalmente.');
    // Opcional: Limpiamos el formulario después de "enviarlo"
    this.productObj = { photo: null, name: '', description: '', price: '' };
  }
}