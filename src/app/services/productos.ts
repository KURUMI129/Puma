import { Injectable } from '@angular/core';
import { Iisproductos } from '../..models/is.Model';

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Iisproductos[] = [
    {
      name: 'Producto 1',
      description: 'Descripcion del producto 1',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }, 
    {
      name: '',
      description: '',
      price: 100,
      sport: ['Running', 'Futbol']
    }
  ];

  obtenerProductos(): producto[] {
    return this.productos;
  }
}
