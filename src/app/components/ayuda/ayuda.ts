import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Para routerLink

@Component({
  selector: 'app-ayuda',
  imports: [RouterModule], // Solo RouterModule para el enlace de volver
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.css'
})
export class Ayuda {

}