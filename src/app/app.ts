import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Bartest } from './components/bartest/bartest';
import { Login } from './components/login/login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Bartest, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Store-Online');
}