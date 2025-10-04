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
   * Esta función es llamada por el evento (activate) del <router-outlet>.
   * Revisa si el componente que se cargó es el de Login para decidir si oculta el header.
   */
  onComponentLoad(component: any) {
    this.showHeader = !(component instanceof Login);
  }
}