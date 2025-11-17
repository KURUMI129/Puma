import { Component, signal } from '@angular/core';
 import { RouterOutlet } from '@angular/router';
 import { CommonModule } from '@angular/common';
 // CORREGIDO: Importar 'Home'
 import { Home } from './components/home/home';
 import { Header } from './components/header/header';
 import { Bartest } from './components/bartest/bartest';
 // CORREGIDO: Importar 'Login'
 import { Login } from './components/login/login';
 import { Footer } from './components/footer/footer'; 

 @Component({
   selector: 'app-root',
   // CORREGIDO: Usar 'Home' y 'Login' en los imports
   imports: [RouterOutlet, CommonModule, Home, Header, Bartest, Login, Footer], 
   templateUrl: './app.html',
   styleUrl: './app.css'
 })
 export class App {
   protected readonly title = signal('Store-Online');
   
   showHeader = true;

 /**
    * Esta es una "función" o "método".
    * Se activa cuando una nueva página se carga en el <router-outlet>.
    */
   onComponentLoad(component: any) {
     // CORREGIDO: Comprobar contra 'Login'
     this.showHeader = !(component instanceof Login);
   }
 }