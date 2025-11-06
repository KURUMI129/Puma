import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { RouterModule } from '@angular/router'; // Para routerLink
 
 @Component({
   selector: 'app-forgot-password',
   imports: [CommonModule, RouterModule], // Solo lo necesario para la plantilla
   templateUrl: './forgot-password.html',
   styleUrl: './forgot-password.css' // Usaremos un CSS propio
 })
 export class ForgotPassword {
   // ¡Sin lógica aquí!
 }