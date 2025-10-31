import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common'; // Importado
 import { RouterModule } from '@angular/router'; // Importado

 @Component({
   selector: 'app-footer',
   imports: [CommonModule, RouterModule], // Añadido
   templateUrl: './footer.html',
   styleUrl: './footer.css'
 })
 export class Footer {

 }