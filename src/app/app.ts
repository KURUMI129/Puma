import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Bartest } from './components/bartest/bartest';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Home, Header, Bartest, Login],
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
    // Revisa si el componente que se cargó es la página de Login.
    // Si es el Login, pone 'showHeader' en 'false' para ocultar el header.
    this.showHeader = !(component instanceof Login);
  }
}