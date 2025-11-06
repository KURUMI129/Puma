import { Injectable } from '@angular/core';
import { Iisproductos } from '../models/is.Model';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private productos: Iisproductos[] = [
    {
      photo: '/Recursos/Articulos/descarga.jpeg',
      name: 'Pollo con Tenis Nike',
      description: 'Un pollo con estilo y tenis Nike Dunk.',
      price: 100,
      sport: ['Moda', 'Urbano']
    },
    {
      photo: '/Recursos/Articulos/Teni.webp',
      name: 'Puma CA Pro Classic',
      description: 'Tenis casuales color crema.',
      price: 120,
      sport: ['Casual', 'Skate']
    },
    {
      photo: '/Recursos/Articulos/teni.4.jfif.jpg',
      name: 'Puma CA Pro Negros',
      description: 'Tenis casuales completamente negros.',
      price: 125,
      sport: ['Casual', 'Urbano']
    }
  ];

  obtenerProductos(): Iisproductos[] {
    return this.productos;
  }

  agregarProducto(producto: Iisproductos) {
    this.productos.push(producto);
    console.log('Productos en memoria:', this.productos);
  }

  eliminarProducto(index: number) {
    if (index > -1 && index < this.productos.length) {
      this.productos.splice(index, 1);
    }
  }

  /**
   * Actualiza un producto existente en la lista.
   */
  actualizarProducto(index: number, productoActualizado: Iisproductos) {
    if (index > -1 && index < this.productos.length) {
      this.productos[index] = productoActualizado;
    } 
  }
}