import { Routes } from '@angular/router';
// CORREGIDO: Importar 'Home' (no HomeComponent)
import { Home } from './components/home/home'; 
// CORREGIDO: Importar 'Login' (no LoginComponent)
import { Login } from './components/login/login'; 
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Bartest } from './components/bartest/bartest';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { SingIn } from './components/sing-in/sing-in';
import { Ayuda } from './components/ayuda/ayuda';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home/:userType',
        component: Home 
    },
    {
        path: 'login',
        component: Login 
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'bartest',
        component: Bartest
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: 'sing-in',
        component: SingIn
    },
    {
        path: 'ayuda',
        component: Ayuda
    }
];