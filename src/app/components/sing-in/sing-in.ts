import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para routerLink

@Component({
  selector: 'app-sing-in',
  imports: [CommonModule, RouterModule], // Solo lo necesario para la plantilla
  templateUrl: './sing-in.html',
  styleUrl: './sing-in.css' // Usaremos un CSS propio
})
export class SingIn {

}