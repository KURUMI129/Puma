import { Injectable } from '@angular/core';
import { Iisproductos } from '../models/is.Model'; // Asegúrate que la ruta al modelo sea correcta

@Injectable({
  providedIn: 'root'
})
export class Productos {
  // Lista privada de productos predefinidos
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
    },
    {
      photo: '/Recursos/Articulos/teni.5.jfif.jpg',
      name: 'Puma CA Pro Rojos',
      description: 'Tenis casuales blancos con detalles rojos.',
      price: 115,
      sport: ['Casual', 'Urbano']
    },
    {
      photo: '/Recursos/Articulos/5c9f3448-d2e0-4786-b609-6ae571fba52b.jpeg',
      name: 'Nike Dunk Low Retro',
      description: 'Tenis Nike Dunk de colores neutros.',
      price: 150,
      sport: ['Skate', 'Urbano']
    },
    {
      photo: '/Recursos/Articulos/The original Chuck Taylor All Star—an icon for….jpeg', // Converse
      name: 'Converse Chuck Taylor',
      description: 'Clásicos Converse All Star negros.',
      price: 90,
      sport: ['Casual', 'Skate', 'Baloncesto']
    },
    {
      photo: '/Recursos/Articulos/teniD.webp',
      name: 'Puma Running Lite',
      description: 'Tenis Puma para correr, color gris claro.',
      price: 130,
      sport: ['Running']
    }
  ];

  obtenerProductos(): Iisproductos[] {
    return this.productos;
  }
}