import { Injectable } from '@angular/core';
import { Iisproductos } from '../models/is.Model';

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Iisproductos[] = [
    {
      photo: '/public/Recursos/Articulos/descarga.jpeg',
      name: 'Producto 1',
      description: 'Descripcion del producto 1',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      photo: '',
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      photo: '',
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      photo: '',
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      photo: '',
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }
  ];

  obtenerProductos(): Iisproductos[] {
    return this.productos;
  }
}